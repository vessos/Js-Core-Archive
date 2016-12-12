/**
 * Created by MARK-Max on 5.10.2016 г..
 */
function printList (input){
    let html ='<ul>\n';
    for(let w of input){
        html+=`<li>${escaping(w)}</li>\n`
    }
    html+='</ul>'
    return html
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
}
console.log(printList(['<b>unescaped text</b>', 'normal text']))
