/**
 * Created by MARK-Max on 5.10.2016 г..
 */
function jsonTable(input){
    let html = '<table>\n';
    for(let arr of input){
        arr = JSON.parse(arr)
        let obj = {};
         obj = arr;
        html+=`<tr>\n`;
        html+=`<td>${escaping(obj.name)}</td>\n`;
        html+=`<td>${escaping(obj.position)}</td>\n`;
        html+=`<td>${obj.salary}</td>\n`;
        html+=`<tr>\n`
    }
    html+=`</table>`;
    function escaping(text){
        let result ='';
        for(let ch of text){
            if(ch=='<'){
                result+='&lt;';
            }
            else if(ch=='>'){
                result+='&gt;'
            }
            else if (ch=='&'){
                result+='&amp;'
            }
            else if (ch=='\"'){
                result+='&quot;'
            }
            else{
                result+=ch;
            }
        }
        return result;
    }
    console.log(html);
}
jsonTable(['{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}'
])