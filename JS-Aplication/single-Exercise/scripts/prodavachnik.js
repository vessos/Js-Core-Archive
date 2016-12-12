function startApp() {
    sessionStorage.clear();

    showHideMenu();

    //Bind the navigation menu bar

    $('#linkHome').click(showHomeView);
    $('#linkLogin').click(showLoginView);
    $('#linkRegister').click(showRegisterView);
    $('#linkListAds').click(showListView);
    $('#linkCreateAd').click(showCreateView);
    $('#linkLogout').click(showLogoutView);

    //Bind form submit Button

    $('#buttonLoginUser').click(loginUser);
    $('#buttonRegisterUser').click(registerUser);
    $('#buttonCreateAd').click(createAd);

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppId="kid_ByA-JLmMx";
    const kinveyAppSecret = "70a681369ac14ffc826c397cbb0f79f3";
    const kinveyAutHeaders = {"Authorization": "Basic "+ btoa(kinveyAppId + ":" + kinveyAppSecret)};

    $(document).on({
        ajaxStart: function(){
            $("#loadingBox").show();
        },
        ajaxStop: function(){
            $("#loadingBox").hide();
        }
    });

    function showHideMenu(){
       $("#menu a").hide();
        if(sessionStorage.getItem("authToken")){
            $("#linkHome").show();
            $("#linkListAds").show();
            $("#linkCreateAd").show();
            $("#linkLogout").show();
        }else{
            $("#linkHome").show();
            $("#linkLogin").show();
            $("#linkRegister").show();
        }
    }
    function showView(viewname){
      //Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewname).show();
    }

    function showHomeView (){
        showView("viewHome");
    }

    function showLoginView (){
        showView("viewLogin");
        $("#formLogin").trigger('reset');
    }

    function showRegisterView (){
        $("#formRegister").trigger('reset');
        showView("viewRegister");
    }

    function showListView (){
        showView("viewAds")
        $("#viewAds").empty();
        $.ajax({
            method:"GET",
            url:kinveyBaseUrl+"appdata/"+kinveyAppId+"/items",
            headers:{"Authorization" : "Kinvey " + sessionStorage.getItem("authToken")},
            success:loadItemsSuccess,
            error:getError
        });

        function loadItemsSuccess(items){
            $("infoBox").empty();
            let table = $(`
                <table>
                   <tr>
                      <th>Title</th>
                      <th>Publisher</th>
                      <th>Description</th>
                      <th>Price</th>
                      <th>Date of publisher</th>
                      <th>Links</th>
                   </tr>
                </table>`);
            for (let item of items){
                let tr=$("<tr>");
                displayTableRow(tr,item);
                tr.appendTo(table);
            }
            $("#viewAds").append(table).show();
        }
    }
    function displayTableRow(tr,item){
        //console.log(item);
       let links=[];
        let readMore =$("<a href='#'>Read More</a>")
            .click(function(){
                loadReadMore(item);
            });
        links.push(readMore);
       if(item._acl.creator==sessionStorage.getItem('userId')){
           let deleteLink = $("<a href='#'>Delete</a>")
               .click(function(){
                   deleteItemById(item._id);
               });
           let editLink= $("<a href='#'>Edit</a>")
               .click(function(){
                   loadItemForEdit(item._id);
               });
           links.push(" ");
           links.push(deleteLink);
           links.push(" ");
           links.push(editLink)
       }


       tr.append(
           $("<td>").text(item.title),
           $("<td>").text(item.publisher),
           $("<td>").text(item.description),
           $("<td>").text(item.price),
           $("<td>").text(item.date),
           $("<td>").append(links)
       )
    }
    function loadReadMore(item){
        showView("viewDetailsAd")
        $("#details").empty();
        let advertInfo=$('<div>').append(
            $(`<img src=${item.image} width="200">`) ,
            $("<br>"),
            $('<label>').text('Title:'),
            $('<h1>').text(item.title),
            $('<label>').text('Description:'),
            $('<p>').text(item.description),
            $('<label>').text('Publisher:'),
            $('<div>').text(item.publisher),
            $('<label>').text('Date:'),
            $('<h1>').text(item.date)
        )
        $("#details").append(advertInfo);
    }

    function deleteItemById(itemId){
        console.log(itemId);
       $.ajax({
           method:"DELETE",
           url:kinveyBaseUrl+"appdata/"+kinveyAppId+"/items/"+itemId,
           headers:{"Authorization":"Kinvey "+sessionStorage.getItem("authToken")},
           success:successDelete,
           error:getError
       });

       function successDelete(data){
           showListView();
           showInfo("success deleted");
       }

    }

    function loadItemForEdit(itemId){
        $.ajax({
            method:"GET",
            url:kinveyBaseUrl + "appdata/" + kinveyAppId + "/items/" + itemId,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
            success: loadBookForEditSuccess,
            error: getError
        });

        function loadBookForEditSuccess(item){
            $('#formEditAd input[name=id]').val(item._id);
            $('#formEditAd input[name=title]').val(item.title);
            $('#formEditAd input[name=publisher]').val(item.publisher);
            $('#formEditAd textarea[name=description]').val(item.description);
            $('#formEditAd input[name=price]').val(item.price);
            $('#formEditAd input[name=datePublished]').val(item.date);
            $('#formEditAd input[name=image]').val(item.image);
            $("#viewAds").hide();
            $("#viewEditAd").show();

            $("#buttonEditAd").click(function(){
               let body = JSON.stringify({
                   title: $("#formEditAd input[name=title]").val(),
                   description: $("#formEditAd textarea[name=description]").val(),
                   publisher: sessionStorage.getItem("username"),
                   date: $("#formEditAd input[name=datePublished]").val(),
                   price: $("#formEditAd input[name=price]").val(),
                   image: $("#formEditAd input[name=image]").val()
               });
               $.ajax({
                   method:"PUT",
                   url:kinveyBaseUrl+"appdata/"+kinveyAppId+"/items/"+$('#formEditAd input[name=id]').val(),
                   headers:{"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
                   contentType: "application/json",
                   data:body,
                   success:successEdit,
                   error:getError
               });
               function successEdit(data){
                   $("#viewEditAd").hide();
                   showListView();
                   showInfo("success edited")
               }
            })
        }

    }


    function showCreateView (){
        showView("viewCreateAd")
    }

    function showLogoutView (){
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl+"user/"+kinveyAppId +"/_logout",
            headers:{"Authorization": "Kinvey " + sessionStorage.getItem("authToken")},
            body:JSON.stringify(""),
            success:successLogout,
            error:getError
        });
        function successLogout(index){
            sessionStorage.clear();
            showView("viewHome");
            showHideMenu();
            $("#loggedInUser").hide();
        }

    }

    function loginUser (){
        console.log('tuk')
        let body=JSON.stringify({
            username:$("#formLogin input[name=username]").val(),
            password:$("#formLogin input[name=passwd]").val()
        });
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl+"user/"+kinveyAppId +"/login",
            headers:kinveyAutHeaders,
            contentType:"application/json",
            data:body,
            success:successLogin,
            error:getError
        });
        function successLogin(index){
            sessionStorage.setItem('authToken',index._kmd.authtoken);
            sessionStorage.setItem('username',index.username);
            sessionStorage.setItem("userId",index._id);
            $("#loggedInUser").text("Welcome " + sessionStorage.getItem("username")).show();
            showHideMenu();
            showView("viewAds");
            showListView();
        }
    }

    function registerUser (){
        let body = JSON.stringify({
            username:$("#formRegister input[name =username]").val(),
            password:$("#formRegister input[name =passwd]").val()
        });
        $.ajax({
           method:"POST" ,
            url:kinveyBaseUrl+"user/"+kinveyAppId,
            headers:kinveyAutHeaders,
            contentType:"application/json",
            data:body,
            success:successRegister,
            error:getError
        });

        function successRegister(index){
            //console.dir(index)
            sessionStorage.setItem('authToken',index._kmd.authtoken);
            sessionStorage.setItem('username',index.username);
            sessionStorage.setItem("userId",index._id);
            showHideMenu();
            $("#loggedInUser").text("Welcome " + sessionStorage.getItem("username")).show();
            showView("viewAds");
            showListView()
        }
    }

    function createAd (){
        let body = JSON.stringify({
            title:$("#formCreateAd input[name=title]").val(),
            description:$("#formCreateAd textarea[name=description]").val(),
            publisher: sessionStorage.getItem('username'),
            date:$("#formCreateAd input[name=datePublished]").val(),
            price:$("#formCreateAd input[name=price]").val(),
            image:$("#formCreateAd input[name=image]").val()
        });
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl+"appdata/"+kinveyAppId+"/items",
            headers:{"Authorization":"Kinvey "+sessionStorage.getItem("authToken")},
            contentType:"application/json",
            data:body,
            success:successCreate,
            error:getError
        });
        function successCreate(index){
           showView("viewAds");
           showListView();
           showInfo("success created");
        }
    }

    function getError(response){
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        Error(errorMsg);
    }
    function Error(errorMsg) {
        //console.dir(errorMsg)
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
    }

    function showInfo(message){
        $("#infoBox").text(message);
        $("#infoBox").show();
        setTimeout(function(){
            $("#infoBox").fadeOut();
        },2000)


    }
}