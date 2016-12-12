/**
 * Created by MARK-Max on 18.10.2016 г..
 */
function addItem(){
    let name = document.getElementById('newItemText').value;
    let newname = document.createElement('li');
    newname.textContent=name;
    document.getElementById('items').appendChild(newname)
    document.getElementById('newItemText').value = '';
}
