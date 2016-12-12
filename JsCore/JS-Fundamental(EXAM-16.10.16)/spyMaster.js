/**
 * Created by MARK-Max on 16.10.2016 г..
 */
function spyMaster (index){
    let arr =[];
    for (let sentance of index){
        arr.push(sentance)
    }
    let special=arr.splice(0,1);
    let specialWord = special[0].toLowerCase();
    let pattern =/(specialkey)[ ]+([A-Z!%#\$]+( ))/g
    for(let s of arr){
        let str = s.toLowerCase();
        let mutch = str.match(specialWord);
        console.log(mutch)
    }


    console.log(specialWord)
}
spyMaster([ 'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!' ]
)
