/**
 * Created by MARK-Max on 30.9.2016 г..
 */
function negativePositive (input){
    let result =[];
    for(let i of input){
        if(i<0){
            result.unshift(i);
        }
        else{
            result.push(i)
        }
    }
    return result;
}
