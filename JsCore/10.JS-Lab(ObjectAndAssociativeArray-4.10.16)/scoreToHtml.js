/**
 * Created by MARK-Max on 4.10.2016 г..
 */
function scoreToHtml (input){
    let arr =JSON.parse(input);
    let html ='<table>\n'
    html+='  <tr><th>name</th><th>score</th></tr>\n'
    for(let x of arr) {
        let obj = x;
        html +=`  <tr><td>${htmlEscape(obj['name'])}</td><td>${obj['score']}</td></tr>\n`
    }
    html+='</table>'
    function htmlEscape(text) {
        let map = { '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;' };
        return text.replace(/[\\"&'<>]/g, ch => map[ch]);
    }
    console.log(html)
}
scoreToHtml('[{"name":"Pesho & Kiro","score":479},{"name":"Gosho, Maria & Viki","score":205}]')