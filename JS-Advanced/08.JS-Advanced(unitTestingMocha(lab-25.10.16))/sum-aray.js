/**
 * Created by MARK-Max on 26.10.2016 г..
 */
function sum(arr){
    let sum =0;
    for(let x of arr ){
        sum+=Number(x);
    }
    return sum;
}

module.exports = {sum};