/**
 * Created by MARK-Max on 8.11.2016 г..
 */
function attachEvents() {
    $('#btnDelete').on('click',function(){
        let textArea = $('#townName').val();
        let towns = $('#towns option');
       let p = $('#result').append('<p>');
        let getDelTowns = true;
        for(let town of towns){
            console.log(town.text);
            if(town.text==textArea){
                town.remove();
                p.text(`${textArea} deleted.`);
                getDelTowns=false;
            }
        }
        if(getDelTowns){
            p.text(`${textArea} not found.`);
        }
        $('#townName').val('')
    })
}