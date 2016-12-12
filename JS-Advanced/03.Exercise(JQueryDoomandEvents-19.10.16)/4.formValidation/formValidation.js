function validate() {
    let clicked = true;
    $("#company").on('click',function(event){
        if(clicked){
            $('#companyInfo').css('display','inline');
            clicked=false;
        }else{
            $('#companyInfo').css('display','none');
            clicked=true;
        }
    });
    let validation = true;
    //let pattern = "\b[A-Za-z0-9]{3,20}\b";

    function validated (){
        let check1 = $("#username");
        let emailValid = $('#email');
        let password =$('#password');
        let confirmPass = $('#confirm-password');

        if (!check1.val().match(/^[A-Za-z0-9]{3,20}$/)) {
            $('#username').css('border','2px solid red ');
            validation = false;
        }
        if(!emailValid.val().match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/)){
            $('#email').css('border','2px solid red');
            validation=false;
        }
        if(!password.val().match(/^[a-zA-Z0-9_]{5,15}$/)){
            $('#password').css('border', '2px solid red');
            $('#confirm-password').css('border', '2px solid red');
            validation=false;
        }
        if(!confirmPass.val().match(/^[a-zA-Z0-9_]{5,15}$/)){
            $('#password').css('border','2px solid red');
            $('#confirm-password').css('border', '2px solid red');
            validation=false;
        }
        if(password.val()!=confirmPass.val()){
            $('#password').css('border', '2px solid red');
            $('#confirm-password').css('border', '2px solid red');
            validation=false;
        }
        if(clicked==false && !$('#companyNumber').val().match(/^[1-9]\d{3}$/)){
            $('#companyNumber').css('border', '2px solid red');
            validation=false;
        }
        return validation;
    }
    $("#submit").on('click',function (event) {
        validated();
        console.log(validation)
        if(validation){
            $('#username').css('border', 'none');
            $('#email').css('border','none');
            $('#password').css('border', 'none');
            $('#confirm-password').css('border', 'none');
            $('#companyNumber').css('border', 'none');
            $("#valid").show();
        }
    });
}
