
function triangleOfStars(num){
    "use strict";
    for(let row =1;row<=num;row++){
        printStars(row)
    }
    for(let row =num-1;row>0;row--){
        printStars(row)
    }
    function printStars (count){
        console.log('*'.repeat(count))
    }
}
triangleOfStars(5)