/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function cookiesByNumbers(input){
    "use strict";
  let number = Number(input[0]);
    for(let i =1;i<=input.length-1;i++) {
        let operator = input[i];
        number = operation(operator);
        console.log(number);
    }

        function operation(operator) {
            switch (operator) {
                case 'chop':
                    return number / 2;
                case 'dice':
                    return Math.sqrt(number);
                case 'splice':
                    return number + 1;
                case 'bake':
                    return number * 3;
                case 'fillet':
                    return number-(number * 20) / 100;
            }
        }

}
cookiesByNumbers([32,'chop','chop','chop'])
