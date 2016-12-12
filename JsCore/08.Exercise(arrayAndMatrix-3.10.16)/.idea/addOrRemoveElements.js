/**
 * Created by MARK-Max on 1.10.2016 г..
 */
function addOrRemoveElements (input){
    let result=[];
    for(let num in input ){
            if(input[num]=='add'){
               result.push(Number(num)+1) ;
            }
            else{
                result.pop()
            }
    }
    if(result[0]==undefined){
        console.log('Empty')
    }
    else{
        console.log(result.join('\n'));
    }

}
//addOrRemoveElements (['add','add','remove','add','add'])
addOrRemoveElements(['remove','remove','remove'])