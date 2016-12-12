function startApp() {
    sessionStorage.clear();

    showHideMenu();

    showView("viewHome");

    //Bind the navigation menu bar
    $("#linkHome").click(showHomeView);
    $("#linkLogin").click(showLoginView);
    $("#linkRegister").click(showRegisterView);
    $("#linkListAds").click(showListView);
    $("#linkCreateAd").click(showCreateView);
    $("#linkLogout").click(showLogoutView);
    
    //Bind form submit Button
    
    $("#buttonLoginUser").click(loginUser);
    $("#buttonRegisterUser").click(registerUser);
    $("#buttonCreateAd").click(createAd);

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppId = "kid_ByA-JLmMx";
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
      if(sessionStorage.getItem("authtoken")) {
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
    function showView(viewName){
        // Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewName).show();

    }

    function showHomeView(){

    }

    function showLoginView() {
       showView("viewLogin")
       // $("#formLogin").trigger('reset');
    }
    
    function showRegisterView() {
        $("#formRegister").trigger('reset');
        showView("viewRegister")
    }
    
    function showListView() {
        $('#viewAds').empty();
        $.ajax({
            method: "GET",
            url: kinveyBaseUrl + "appdata/" + kinveyAppId + "/items",
            headers: {"Authorization" : "Kinvey " + sessionStorage.getItem("authtoken")},
            success: loadItemsSuccess,
            error: getError
        });
        function loadItemsSuccess(items) {
            $("#infoBox").empty();
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
            for(let item of items){
                let tr=$('<tr>');
                displayTableRow(tr,item);
                tr.appendTo(table);
            }
            $("#viewAds").show();
            $("#viewAds").append(table);
        }
        function displayTableRow(tr,item){
            //console.dir(item)
            let links = [];
            if(item._acl.creator==sessionStorage.getItem("userId")){
                let deleteLink = $("<a href='#'>[Delete]</a>")
                    .click(function(){
                        deleteItemById(item._id);
                    });
                let editLink = $("<a href='#'>[Edit]</a>")
                    .click(function(){
                        loadItemForEdit(item._id);
                    });
                links.push(deleteLink);
                links.push(" ");
                links.push(editLink);
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
    }
    function deleteItemById(itemId){
        $.ajax({
            method: "DELETE",
            url: kinveyBaseUrl + "appdata/" + kinveyAppId + "/items/"+itemId,
            headers: {"Authorization" : "Kinvey " + sessionStorage.getItem("authtoken")},
            success: deleteBooksSuccess,
            error: getError
        });

        function deleteBooksSuccess(){
            showListView();
            showInfo("success deleted")
        }
    }


    function showCreateView(){
        showView("viewCreateAd");

    }

    function showLogoutView() {
        sessionStorage.clear();
        $("#loggedInUser").text('');
        showView("viewHome");
        showHideMenu()
    }

    function loginUser() {
        let body = {
            username: $("#formLogin input[name=username]").val(),
            password: $("#formLogin input[name=passwd]").val()
        };
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl +"user/"+kinveyAppId+"/login",
            headers:kinveyAutHeaders,
            contentType: "application/json",
            data:JSON.stringify(body),
            success:loginSuccess,
            error: getError

        });
        function loginSuccess(data){
            sessionStorage.setItem("username",data.username);
            sessionStorage.setItem("authtoken",data._kmd.authtoken);
            sessionStorage.setItem("userId",data._id);
            $("#loggedInUser").text("Welcome "+ data.username +"!");

            $("#loggedInUser").show();
            showHideMenu();
            $("#viewLogin").hide();
            $("#viewAds").show();
            showInfo("success");
            showListView();
        }

    }

    function registerUser() {
        let body =JSON.stringify ({
            username: $("#formRegister input[name=username]").val(),
            password: $("#formRegister input[name=passwd]").val()
        });
        console.log(body);
        $.ajax({
            method:"POST",
            url: kinveyBaseUrl + "user/" +kinveyAppId,
            headers: kinveyAutHeaders,
            contentType: "application/json",
            data: body,
            success: successRegister,
            error:getError
        });
        function successRegister(data) {
            console.dir(data)
            sessionStorage.setItem("username",data.username);
            sessionStorage.setItem("authtoken",data._kmd.authtoken);
            sessionStorage.setItem("userId",data._id);
            $("#loggedInUser").text("Welcome"+ data.username +"!")
            showHideMenu();
            showListView();
            $("#formRegister").trigger('reset');
            $("#viewRegister").hide();
            showInfo("success")
        }
    }


    function createAd() {
        let body = JSON.stringify({
            title: $("#formCreateAd input[name=title]").val(),
            description: $("#formCreateAd textarea[name=description]").val(),
            publisher: sessionStorage.getItem("username"),
            date: $("#formCreateAd input[name=datePublished]").val(),
            price: $("#formCreateAd input[name=price]").val()
        });
        $.ajax({
            method: "POST",
            url:kinveyBaseUrl +"appdata/"+ kinveyAppId+"/items",
            headers:{"Authorization": "Kinvey " + sessionStorage.getItem("authtoken")},
            contentType: "application/json",
            data: body,
            success: appSucc,
            error: getError
        });
        function appSucc(data) {
            //console.log(data)
            $("#formCreateAd").hide()
            showListView();
            showInfo("success created")

        }
        console.log(body)
    }

    function loadItemForEdit(itemId) {
        $.ajax({
            method: "GET",
            url: kinveyBookUrl = kinveyBaseUrl + "appdata/" +
                kinveyAppId + "/items/" + itemId,
            headers: {"Authorization": "Kinvey " + sessionStorage.getItem("authtoken")},
            success: loadBookForEditSuccess,
            error: getError
        });

        function loadBookForEditSuccess(item) {
            $('#formEditAd input[name=id]').val(item._id);
            $('#formEditAd input[name=title]').val(item.title);
            $('#formEditAd input[name=publisher]').val(item.publisher);
            $('#formEditAd textarea[name=description]').val(item.description);
            $('#formEditAd input[name=price]').val(item.price);
            $('#formEditAd input[name=datePublished]').val(item.date);
            $("#viewAds").hide();
            $("#viewEditAd").show();

            $("#buttonEditAd").click(function(){

                let body = JSON.stringify({
                    title: $("#formEditAd input[name=title]").val(),
                    description: $("#formEditAd textarea[name=description]").val(),
                    publisher: sessionStorage.getItem("username"),
                    date: $("#formEditAd input[name=datePublished]").val(),
                    price: $("#formEditAd input[name=price]").val()
                });
                $.ajax({
                    method: "PUT",
                    url:kinveyBaseUrl +"appdata/"+ kinveyAppId+"/items/"
                    +$('#formEditAd input[name=id]').val(),
                    headers:{"Authorization": "Kinvey " + sessionStorage.getItem("authtoken")},
                    contentType: "application/json",
                    data: body,
                    success: appSucc,
                    error: getError
                });
                function appSucc(data) {
                    console.log(data)
                    $("#viewEditAd").hide()
                    showListView();
                    showInfo("success edited")

                }
            })

        }
    }
    function getError(response) {
        let errorMsg = JSON.stringify(response);
        if (response.readyState === 0)
            errorMsg = "Cannot connect due to network error.";
        if (response.responseJSON &&
            response.responseJSON.description)
            errorMsg = response.responseJSON.description;
        Error(errorMsg);
    }

    function Error(errorMsg) {
        console.dir(errorMsg)
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