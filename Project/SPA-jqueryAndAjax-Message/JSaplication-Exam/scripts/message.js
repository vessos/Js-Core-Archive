/**
 * Created by MARK-Max on 11.12.2016 г..
 */
function startApp() {
    showHideMenu();
    $("#spanMenuLoggedInUser").hide();
    //Navigation menu bar
    $("#linkMenuAppHome").click(showAppHomeView);
    $("#linkMenuLogin").click(showLoginView);
    $("#linkMenuRegister").click(showRegisterView);
    $("#linkMenuUserHome").click(showUserHomeView);
    $("#linkMenuMyMessages").click(showMyMessagesView);
    $("#linkMenuArchiveSent").click(showArchiveView);
    $("#linkMenuSendMessage").click(showSendMessagesView);
     $("#linkMenuLogout").click(showLogoutView);

    //Submit Button
    $("#formLogin input[type=submit]").on("click", loginUser);
    $("#formRegister input[type=submit]").on("click",registerUser);
    $("#linkUserHomeMyMessages").click(showMyMessagesView);
    $("#linkUserHomeSendMessage").click(showSendMessagesView);
    $("#linkUserHomeArchiveSent").click(showArchiveView);
    $("#formSendMessage input[type=submit]").on("click",newMessage)

    const kinveyBaseUrl = "https://baas.kinvey.com/";
    const kinveyAppId = "kid_B1zFC_q7g";
    const kinveyAppSecret = "e6602cd7a00c41e1b4b197f910e9d272";
    const kinveyAutHeaders = {"Authorization": "Basic " + btoa(kinveyAppId + ":" + kinveyAppSecret)};

    $(document).on({
        ajaxStart: function () {
            $("#loadingBox").show();
        },
        ajaxStop: function () {
            $("#loadingBox").hide();
        }
    });
    function showView(viewname) {
        //Hide all views and show the selected view only
        $('main > section').hide();
        $('#' + viewname).show();
    }

    function showHideMenu() {
        $("#menu a").hide();
        if (sessionStorage.getItem("authToken")) {
            $("#linkMenuUserHome").show();
            $("#linkMenuMyMessages").show();
            $("#linkMenuArchiveSent").show();
            $("#linkMenuSendMessage").show();
            $("#linkMenuLogout").show();
        } else {
            $("#linkMenuAppHome").show();
            $("#linkMenuLogin").show();
            $("#linkMenuRegister").show();
        }
    }

    function showAppHomeView() {
        showView('viewAppHome')
    }

    function showLoginView() {
        showView('viewLogin');
        $("#formLogin").trigger('reset');
    }

    function showRegisterView() {
        $("#formRegister").trigger('reset');
        showView('viewRegister')
    }

    function showUserHomeView(){
        showView('viewUserHome');
    }

    function showMyMessagesView(){
        showView('viewMyMessages')
        myMessages();
    }

    function showArchiveView(){
        showView('viewArchiveSent');
        archiveMessages();
    }

    function showSendMessagesView(){
        showView('viewSendMessage');
        $("#formSendMessage").trigger('reset');
        sendMessages()
    }

    function loginUser(e) {
        e.preventDefault();
        let body = JSON.stringify({
            username: $("#loginUsername").val(),
            password: $("#loginPasswd").val(),
        });
        $.ajax({
            method: "POST",
            url: kinveyBaseUrl + "user/" + kinveyAppId + "/login",
            headers: kinveyAutHeaders,
            contentType:"application/json",
            data: body,
            success: successLogin,
            error: getError
        });
        function successLogin(data) {
            sessionStorage.setItem('authToken',data._kmd.authtoken);
            sessionStorage.setItem('username',data.username);
            sessionStorage.setItem('userId',data._id);
            sessionStorage.setItem('user',data.name);
            $("#spanMenuLoggedInUser").text("Welcome " + sessionStorage.getItem("username")).show();
            //$("#viewUserHomeHeading").empty();
            $("#viewUserHomeHeading").text("Welcome " +sessionStorage.getItem('username'));
            showInfo("success login")
            showHideMenu();
            showView('viewUserHome');
        }

    }

    function registerUser(e) {
        e.preventDefault();
        let body = JSON.stringify({
            username:$("#registerUsername").val(),
            password:$("#registerPasswd").val(),
            name:$("#registerName").val()
        });
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl+"user/"+kinveyAppId,
            headers:kinveyAutHeaders,
            contentType:"application/json",
            data:body,
            success:successRegister,
            error:getError
        });
        function successRegister(data){
            sessionStorage.setItem('authToken',data._kmd.authtoken);
            sessionStorage.setItem('username',data.username);
            sessionStorage.setItem('userId',data._id);
            sessionStorage.setItem('user',data.name);
            showHideMenu();
            $("#spanMenuLoggedInUser").text("Welcome " + sessionStorage.getItem("username")).show();
            //$("#viewUserHomeHeading").empty();
            $("#viewUserHomeHeading").text("Welcome " +sessionStorage.getItem('username'));
            showInfo("success register")
            showView('viewUserHome');
        }
    }

    function showLogoutView(){
       $.ajax({
           method:"POST",
           url:kinveyBaseUrl+"user/"+kinveyAppId+"/_logout",
           headers:{"Authorization": "Kinvey " + sessionStorage.getItem('authToken')},
           body:JSON.stringify(""),
           success:successLogout,
           error:getError
       });
       function successLogout(data){
           sessionStorage.clear();
           showInfo("success logout")
           showView('viewAppHome');
           showHideMenu();
           $("#spanMenuLoggedInUser").hide();
       }
    }

    function myMessages(){
        $.ajax({
            method:"GET",
            url:kinveyBaseUrl+"appdata/"+kinveyAppId+`/messages?query={"recipient_username":"${sessionStorage.getItem("username")}"}`,
            headers:{"Authorization": "Kinvey " + sessionStorage.getItem('authToken')},
            success:successMessage,
            error:getError
        });
        function successMessage(items){
            console.log(items)
            $("#myMessages").empty();
            let table =$(`
                <table>
                   <tr>
                      <th>From</th>
                      <th>Message</th>
                      <th>Date Received</th>
                   </tr>
                </table>`);
            for (let item of items){
                let tr=$('<tr>');
                tr.append(
                    $("<td>").text(formatSender(item.sender_name,item.sender_username)),
                    $("<td>").text(item.text),
                    $("<td>").text(formatDate(item._kmd.ect))
                );
                tr.appendTo(table)
            }
            $("#myMessages").append(table);
        }
    }

    function sendMessages(){
       $.ajax({
           method:"GET",
           url:kinveyBaseUrl+"user/"+kinveyAppId,
           headers:{"Authorization": "Kinvey " + sessionStorage.getItem('authToken')},
           success:successUsers,
           error:getError
       });
       function successUsers(users){
           console.log(users);
           $("#msgRecipientUsername").empty();
           for(let user of users){
               let opt=$(`<option value="${user.username}">`)
               opt.text(`${user.name}(${user.username})`);
               $("#msgRecipientUsername").append(opt);
           }


          // $('#aioConceptName').find(":selected").text()
       }
    }

    function newMessage(e){
        e.preventDefault();
        let body = JSON.stringify({
            sender_username:sessionStorage.getItem('username'),
            sender_name:sessionStorage.getItem('user'),
            recipient_username:$("#msgRecipientUsername option:selected").val(),
            text:$("#msgText").val()
        });
        //console.log($("#msgRecipientUsername").find('option:selected').val());
        $.ajax({
            method:"POST",
            url:kinveyBaseUrl+"appdata/"+kinveyAppId+"/messages",
            headers:{"Authorization":"Kinvey "+sessionStorage.getItem("authToken")},
            contentType:"application/json",
            data:body,
            success:sMess,
            error:getError
        });
        function sMess(index){
            //console.log(index)
            showInfo("success sent")
            showView('viewUserHome');
        }
    }

    function archiveMessages(){
        $("#sentMessages").empty();
        $.ajax({
            method:"GET",
            url:kinveyBaseUrl+"appdata/"+kinveyAppId+`/messages?query={"sender_username":"${sessionStorage.getItem("username")}"}`,
            headers:{"Authorization": "Kinvey " + sessionStorage.getItem('authToken')},
            success:getMyArchive,
            error:getError
        });
        function getMyArchive(items){
            //console.log(items)
            let table =$(`
                <table>
                 <thead>
                      <tr>
                         <th>To</th>
                         <th>Message</th>
                         <th>Date Sent</th>
                         <th>Actions</th>
                      </tr>
                   </thead>
                </table>`);
            let tbody=$('<tbody>');
            for(let item of items){
                let tr=$('<tr>');
                let deleted =$("<a href='#'>Delete</a>")
                    .click(function(){
                        deleteItemBy(item._id);
                    });
                tr.append(
                    $("<td>").text(item.recipient_username),
                    $("<td>").text(item.text),
                    $("<td>").text(formatDate(item._kmd.ect)),
                    $("<td>").append(deleted)
                );
                tr.appendTo(tbody)
            }
            tbody.appendTo(table);
            $("#sentMessages").append(table);
        }
    }
    function deleteItemBy(itemId){
        console.log(itemId)
        $.ajax({
            method:"DELETE",
            url:kinveyBaseUrl+"appdata/"+kinveyAppId+"/messages/"+itemId,
            headers:{"Authorization":"Kinvey "+sessionStorage.getItem("authToken")},
            success:successDelete,
            error:getError
        });
        function successDelete(data){
            showInfo("success deleted");
            archiveMessages();
        }
    }

    function formatDate(dateISO8601) {
        let date = new Date(dateISO8601);
        if (Number.isNaN(date.getDate()))
            return '';
        return date.getDate() + '.' + padZeros(date.getMonth() + 1) +
            "." + date.getFullYear() + ' ' + date.getHours() + ':' +
            padZeros(date.getMinutes()) + ':' + padZeros(date.getSeconds());

        function padZeros(num) {
            return ('0' + num).slice(-2);
        }
    }

    function formatSender(name, username) {
        if (!name)
            return username;
        else
            return username + ' (' + name + ')';
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
        //console.dir(errorMsg)
        $('#errorBox').text("Error: " + errorMsg);
        $('#errorBox').show();
        $('#errorBox').click(function(){
            setTimeout(function(){
                $('#errorBox').fadeOut();
            },1000)

        })
    }
    function showInfo(message){
        $("#infoBox").text(message);
        $("#infoBox").show();
        setTimeout(function(){
            $("#infoBox").fadeOut();
        },2000)


    }


}
