/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function calculator([a,b,op]){

    [a,b]=[a,b].map(Number);
    let calc = function(a,b,op){
        return op(a,b)
    }
    let add = function(a,b){
        return a+b;
    }
    let subtract = function(a,b){
        return a-b;
    }
    let multiply = function(a,b){
        return a*b;
    }
    let divide = function(a,b){
        return a/b;
    }
    switch(op){
        case '+':return calc(a,b,add);
        case '-':return calc(a,b,subtract);
        case '*':return calc(a,b,multiply);
        case '/':return calc(a,b,divide);
    }
}
console.log(calculator([2,3,'+']))