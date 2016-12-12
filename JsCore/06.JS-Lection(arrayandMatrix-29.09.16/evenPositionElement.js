/**
 * Created by MARK-Max on 29.9.2016 г..
 */
function evenPositionElement (input){
    let result = [];
    for(let i in input){
        if (i%2==0){
            result.push(input[i]);
        }
    }
    console.log(result.join(' '))
}
evenPositionElement ([10,20,30,40,50,60])