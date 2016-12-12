/**
 * Created by MARK-Max on 13.11.2016 г..
 */
function attachEvents() {
    let addBtn = $('#btnAdd');
    let delBtn = $('#btnDelete');

    addBtn.on('click',function(){
        let text = $('#newItem').val();
        if(text!=''){
            $('#towns').append(`<option>${text}</option>`)
        }
        $('#newItem').val('');
    });

    delBtn.on('click',function(){
        let town= $('#towns option:selected').text();
        let towns = $('#towns option');
        for(let tow of towns){
            if(tow.text==town){
                tow.remove()
                return;
            }
        }
    })
}