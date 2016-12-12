/**
 * Created by MARK-Max on 21.10.2016 г..
 */
function addItem(){
    let item =document.getElementById('newText').value;
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(item))
    let span = document.createElement('span');
    span.innerHTML='<a href="#">[Delete]</a>'
    span.firstChild.addEventListener('click',deleteItem);
    li.appendChild(span);
    document.getElementById('items').appendChild(li);
    document.getElementById('newText').value='';
    function deleteItem(){
        let li =this.parentNode.parentNode;
        let ul = li.parentNode;
        ul.removeChild(li)
    }
}
