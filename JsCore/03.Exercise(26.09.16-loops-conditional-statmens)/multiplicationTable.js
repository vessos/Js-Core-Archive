/**
 * Created by MARK-Max on 26.9.2016 г..
 */
function multiplicationTable (num){
   let n = Number(num[0]);
    console.log('<table border=1>');
    let firstline = '<tr><th>x</th>';
    for(let i=1;i<=n;i++){
        firstline+='<th>'+i+'</th>'
    }
    firstline+='</tr>'
    console.log(firstline)
   for(let row = 1;row<=n;row++){
        let line ='<tr><th>'+row+'</th>' ;
       for(let col =row;col<=n*row;col+=row){
           line +='<td>'+col+'</td>';
       }
       line+='</tr>';
       console.log(line)
   }
   console.log('</table>')
}
multiplicationTable ([3])