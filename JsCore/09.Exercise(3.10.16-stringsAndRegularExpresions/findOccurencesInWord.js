/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function findOccurencess (input){
    let str = input[0];
    let word = input[1];
    let pattern = `\\b${word}\\b`;
    let regex = new RegExp(pattern,'gi');
    let count= 0;
    let much = regex.exec(str);
    while(much){
        count++;
        much = regex.exec(str);
    }
    console.log(count)
}
findOccurencess(['The waterfall was so high, that the child couldn’t see its peak.','the']);