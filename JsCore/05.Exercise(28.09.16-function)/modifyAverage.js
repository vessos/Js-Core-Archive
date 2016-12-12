/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function modifyAverage (input){
    "use strict";
    let number =input[0];
    let result1=sumResult(number);
    while((result1/number.length)<5.1){
        number = average(number)
        result1 = sumResult(number);
    }
    console.log(number);
    function sumResult(number) {
        let result = 0;
        for (let x of number) {
            let num = Math.abs(Number(x));
            result += num;
        }
        return result;
    }
    function average (number){
        number = number+'9';
        return number;
    }
}
modifyAverage (['100001'])
