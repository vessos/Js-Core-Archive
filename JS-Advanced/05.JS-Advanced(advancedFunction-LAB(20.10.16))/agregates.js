/**
 * Created by MARK-Max on 23.10.2016 г..
 */
function calcAgregates(arr){
    console.log("Sum="+reduce(arr,(a,b)=>Number(a)+Number(b)));
    console.log("Min="+reduce(arr,(a,b)=>Math.min(a,b)));
    console.log("Max="+reduce(arr,(a,b)=>Math.max(a,b)));
    console.log("Product="+reduce(arr,(a,b)=>Number(a)*Number(b)));
    console.log("Join="+reduce(arr,(a,b)=>''+a+b))
    function reduce(arr,func){
        let result =arr[0];
        for(let nextelement of arr.slice(1)){
            result = func(result,nextelement)
        }
        return result;
    }
}
calcAgregates(['2','3','10','5'])