/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function startWith ([str,substr]){
    let substrLenght = substr.length
    let newstr = str.substr(0,substrLenght);
    console.log(newstr===substr)
}
//startWith(['How have you been?','how'])
//startWith(['The quick brown fox…','The quick brown fox…'])
startWith(['Marketing Fundamentals, starting 19/10/2016','Marketing Fundamentals, sta'])