/**
 * Created by MARK-Max on 29.10.2016 г..
 */
function argument(){
    let summary ={};
    let sortedTypes = [];
    for(let i =0 ;i<arguments.length;i++){
        let obj = arguments[i];
        let type = typeof obj;
        console.log(type+': '+obj);

        if(!summary[type]){
            summary[type]=1
        }else{
            summary[type]++
        }
    }
    for(let currentType in summary){
        sortedTypes.push([currentType,summary[currentType]])
    }
    for(let type of sortedTypes){
        console.log(type[0]+' = '+type[1])
    }
}
//argument('cat', 42, function () {console.log('Hello world!');});
argument({ name: 'bob'}, 3.333, 9.999)