/**
 * Created by MARK-Max on 30.9.2016 г..
 */
function processOddNummbers(input){
    let result = input.filter((num,i)=>i%2!=0)
        .map(x=>x*2)
        .reverse();
    return result.join(' ');
}
