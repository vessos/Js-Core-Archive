/**
 * Created by MARK-Max on 1.10.2016 г..
 */
function printNElemant(input){
    let step = Number(input[input.length-1]);
    input.pop();

    for(let i = 0;i<input.length;i+=step){

        console.log(input[i]);
    }
}
printNElemant(['dsa','asd','test','test','2'])