/**
 * Created by MARK-Max on 11.10.2016 г..
 */
function countWordsInMaps (input){
    input[0]=input[0].toLowerCase();
    let arr = input[0].split(/\W/g).filter(x=>x!='');
    let map = new Map();
    for(let w of arr){
        if(map.has(w)){
            map.set(w,map.get(w)+1);
        }else{
            map.set(w,1)
        }
    }
    let newmap = Array.from(map.keys()).sort();
    for(let s of newmap){
        console.log(`'${s}' -> ${map.get(s)} times`);
    }
}
countWordsInMaps([ 'Far too slow, you\'re far too slow.' ])
