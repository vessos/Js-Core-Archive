/**
 * Created by MARK-Max on 18.10.2016 г..
 */
function colorizeRows(){
    let index = document.querySelectorAll('table tr');
    for(let i =0 ;i<index.length;i++){
        if(i%2!=0){
            index[i].style.backgroundColor='Teal'
        }
    }

}
