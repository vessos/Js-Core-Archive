/**
 * Created by MARK-Max on 9.11.2016 г..
 */
function subsum(arr,startIndex,endIndex){
    if(!Array.isArray(arr)){
        return NaN;
    }
    if(startIndex<0){
        startIndex=0;
    }
    if(endIndex>arr.length-1){
        endIndex=arr.length-1
    }
    let sum = 0 ;
    for(let i =startIndex;i<=endIndex;i++){
        sum+=Number(arr[i]);
    }
    return sum;
}
console.log(subsum([2,3,4],'p','g'))
