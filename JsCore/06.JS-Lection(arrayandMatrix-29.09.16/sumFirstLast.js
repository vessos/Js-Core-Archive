/**
 * Created by MARK-Max on 29.9.2016 г..
 */
function firstLastSum (index){
    let first = Number(index[0]);
    let last = Number(index[index.length-1]);
    return first+last;
}
console.log(firstLastSum (['10','20','40']))
