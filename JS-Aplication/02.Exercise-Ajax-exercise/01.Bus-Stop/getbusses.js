function getInfo(){
    let name = $("#stopId").val();
    $("#stopName").text("");
    $("#buses").empty();
    //console.log(name)

    let request={
        method: "GET",
        url: "https://judgetests.firebaseio.com/businfo/"+ name +".json ",
        success: displayRepos,
        error: displayError
    };
    $.ajax(request);
    function displayRepos(data){
        console.log(data);
        if(data==null||name==''||data.length==0){
            displayError()
        }else{
            $("#stopName").text(data.name);
            let obj = data.buses;
            //console.log(obj)
           for(let cicle in obj){
                $("#buses").append($(`<li>Bus ${cicle} arrives in ${data.buses[cicle]} minutes</li>`))
           }
        }
        //console.log(data)
    }
    function displayError(){
        $('#stopName').text('Error')
    }
    $("#stopId").val("")
}