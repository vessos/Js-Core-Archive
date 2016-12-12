/**
 * Created by MARK-Max on 21.11.2016 г..
 */
function getElements(){
    let Div = $("<div>");
    const kinveyAppId ="kid_BJXTsSi-e";
    const urlService = "https://baas.kinvey.com/appdata/"+kinveyAppId+"/students"
    const username = "guest";
    const password = "guest";
    const base64author = btoa(username+":"+password);
    const authHeaders = { "Authorization": "Basic "+base64author };
    let arr=[];
    let btn = $("<button id='btnExtract'>Extract</button>");
    let D= $(`<div id="extract">`);
    let inputID = $('<input type="number" id="ID">ID<input type="text" id="FN">First Name<input type="text" id="LN">Last Name<input type="text"id="FAN">Faculty Nymber<input type="number"id="Gd">Grade')
    let postBtn = $("<button id='btnPost'>Submit</button>");
    let DI = $(`<table id="post">Submit</table>`);
    D.append(btn)
    DI.append(inputID);
    DI.append(postBtn)
    $(document.body).append(D)
    $(document.body).append(DI)
    $.ajax({
        method: "GET",
        url: urlService,
        headers: authHeaders
    })
        .then(getStudents)
        .catch (getError)

    function getStudents(data){

        data.sort((a,b)=>a.ID-b.ID);
        for(let obj of data){
            let Td= $(`<tr></tr><td>${obj.ID}</td><td>${obj.FirstName}</td><td>${obj.LastName}</td><td>${obj.FacultyNumber}</td><td>${obj.Grade}</td></tr>`);
            $("#results").append(Td)
            Td.click(clicked)
        }


    }
    function getError() {
       console.log("Error")
    }
   function clicked(){
        console.log($(this))
        arr.push($(this));
    }
    $("#btnExtract").on("click",function(){

        for(let i of arr){
            $("#extract").append(`<p>${i[0].innerText}</p>`)
        }
    });
   $("#btnPost").on("click",function(){
       let facultynumber = $("#FAN");
       let firstName=$("#FN");
       let grade=$("#Gd");
       let idNumber = $("#ID");
       let lastName=$("#LN");

       let body = JSON.stringify({
           FacultyNumber: facultynumber.val(),
           FirstName: firstName.val(),
           Grade: Number(grade.val()),
           ID: Number(idNumber.val()),
           LastName: lastName.val()
       });
       console.log(body)
       let substract={
           "method": "POST",
           "url": urlService,
           "headers": {"Content-Type": "application/json",
               "Authorization": "Basic "+base64author},
           "data": body
       };
       $.ajax(substract)
           .then(postStudent)
           .catch (getError);
       function postStudent(body){
           console.log(body)
       }
   })


}
