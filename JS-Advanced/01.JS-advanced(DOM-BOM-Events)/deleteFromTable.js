/**
 * Created by MARK-Max on 21.10.2016 г..
 */
function deleteByEmail(){
    let email = document.getElementsByName('email')[0].value;
    let tableMail = document.querySelectorAll('#customers td ');
    for(let table of tableMail){
        let b = table.textContent;
        if(email==b) {
            table.parentNode.parentNode.removeChild(table.parentNode)
            let text = document.createElement('p');
            text.textContent = 'Deleted.'
            console.log(text)
            document.getElementById('result').appendChild(text)
        }
        document.getElementById('result').textContent = "Not found.";

    }
}
