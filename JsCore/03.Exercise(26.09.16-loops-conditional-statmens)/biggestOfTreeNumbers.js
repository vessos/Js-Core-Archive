/**
 * Created by MARK-Max on 26.9.2016 г..
 */
function bigestNumber(input){
    let number1 = Number(input[0]);
    let number2 = Number(input[1]);
    let number3 = Number(input[2]);
    let bigestnum = Math.max(number1,number2,number3)
    return bigestnum;
}
console.log(bigestNumber(['1','2','3']))