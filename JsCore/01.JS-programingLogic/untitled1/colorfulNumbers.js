/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function colorfulNumbers (n){
    let htmltable = '<ul>';
    console.log(htmltable);
    let num = Number(n[0]);
    for(let i=1;i<=n;i++){
        if(i%2==0){
            console.log(' <li><span style="color: blue">' +
                i+'</span></li>');
        }
        else{
            console.log(' <li><span style="color: green">' +
                i+'</span></li>');
        }
    }
    htmltable = '</ul>'
    console.log(htmltable)
}
colorfulNumbers (['10'])