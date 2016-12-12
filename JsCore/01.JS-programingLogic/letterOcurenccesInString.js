/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function letterInString([str,l]){
    let count = 0;
    for(let charr of str)
    {
        if(charr==l){
            count++;
        }
    }
    return count ;
}
console.log(letterInString(['hello','l']))