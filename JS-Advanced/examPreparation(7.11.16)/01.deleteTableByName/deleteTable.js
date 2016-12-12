/**
 * Created by MARK-Max on 7.11.2016 г..
 */
function attachEvents(){
    let deleteBtn = $('#btnDelete');
    let p = $('#result').append('<p>');
    deleteBtn.on('click',function(){
        let textArea = $('#townName').val();
        console.log(textArea)
        let towns = $('#towns option');
        console.log(towns);
        let bool = true;
        for(let text of towns ) {
            if(textArea==text.text){
                text.remove();
                bool=false;
              p.text(`${textArea} deleted.`);
            }
            //console.log(text.text)
        }
        if(bool){
            p.text(`${textArea} not found.`);
        }
        $('#townName').val('');
    })
}