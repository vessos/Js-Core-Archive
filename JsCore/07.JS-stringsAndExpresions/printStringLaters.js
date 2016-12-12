/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function printString (input){
    if(Array.isArray(input)){
        input = input[0];
    }
    for(let i in input){
        console.log(`str[${i}] -> ${input[i]}`)
    }
}
 printString(['Hello'])