/**
 * Created by MARK-Max on 14.10.2016 г..
 */
function dagerAndSword(input){
    input = input.map(Number);
    let arr =[];
    for(let num of input){
        arr.push(Math.floor(num));
    }
    let html = `<table border=\"1\">\n<thead>\n<tr><th colspan="3">Blades</th></tr>\n`;
    html+=`<tr><th>Length [cm]</th><th>Type</th><th>Application</th></tr>\n</thead>\n<tbody>\n`;
    for(let number of arr){
        let type = number%10;
        let blade;
        if(number >40){
            blade='sword'
        }else{
            blade='dagger'
        }
        if(number>10) {
            if (type == 1 || type == 6) {
                html += `<tr><td>${number}</td><td>${blade}</td><td>blade</td></tr>\n`
            }
            else if (type == 2 || type == 7) {
                html += `<tr><td>${number}</td><td>${blade}</td><td>quite a blade</td></tr>\n`
            }
            else if (type == 3 || type == 8) {
                html += `<tr><td>${number}</td><td>${blade}</td><td>pants-scraper</td></tr>\n`
            }
            else if (type == 4 || type == 9) {
                html += `<tr><td>${number}</td><td>${blade}</td><td>frog-butcher</td></tr>\n`
            }
            else {
                html += `<tr><td>${number}</td><td>${blade}</td><td>*rap-poker</td></tr>\n`
            }
        }

    }
    html+=`</tbody>\n</table>`
    console.log(html);
}
dagerAndSword([ '17.8', '3', '19.4', '13', '55.8', '126.96541651' ])