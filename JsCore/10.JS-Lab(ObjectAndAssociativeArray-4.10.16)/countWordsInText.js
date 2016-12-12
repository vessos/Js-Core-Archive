/**
 * Created by MARK-Max on 11.10.2016 г..
 */
function countsWord (input){
    let arr = input[0].split(/\W/g).filter(x=>x!='');
    let obj ={};
    for(let w of arr){
        if(obj[w]==undefined){
            obj[w]=1;
        }else{
            obj[w]+=1;
        }
    }
    console.log(JSON.stringify(obj))
}
countsWord([ 'Far too slow, you\'re far too slow.' ])