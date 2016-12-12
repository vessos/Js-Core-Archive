/**
 * Created by MARK-Max on 1.10.2016 г..
 */
function rotateArray(input){
    let rotate = Number(input[input.length-1]);
    input.pop();
    let startitem =rotate%input.length;

    for(let i =0;i<startitem;i++){
        input.unshift(input.pop());
    }
    console.log(input.join(' '));
}
rotateArray([1,2,3,4,2]);
//rotateArray(['banana','orange','coconut','apple','15'])