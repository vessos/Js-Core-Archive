/**
 * Created by MARK-Max on 4.10.2016 г..
 */
function jsonToHtmlTable(input) {
    let str = JSON.parse(input);
    let html = '<table>\n';
    html += `  <tr>`;
    for (let k of Object.keys(str[0])) {
        html += `<th>${htmlEscape(k)}</th>`
    }
    html += '</tr>\n';
    for (let w of str) {
        html += `  <tr>`
        for (let i of Object.keys(w)) {
            let name = w[i];
            if( typeof name ==='string'){
                name = htmlEscape(name);
            }
            html += `<td>${name}</td>`
        }
        html+=`</tr>\n`
    }
    html+=`</table>`
    function htmlEscape(text) {
        let map = {
            '"': '&quot;', '&': '&amp;',
            "'": '&#39;', '<': '&lt;', '>': '&gt;'
        };
        return text.replace(/[\"&'<>]/g, ch => map[ch]);
    }
    console.log(html)
}
jsonToHtmlTable('[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]')
