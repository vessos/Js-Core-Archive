/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function checkStrings ([main,word]){
    let mainstr = main.split(' ');
    let ifequal = false;
    for(let w of mainstr){
        if(w==word){
            ifequal=true;
        }
    }
    if(ifequal==true){
        console.log('true')
    }
    else{
        console.log('false')
    }

}
checkStrings(['This sentence ends with fun?','fun?'])