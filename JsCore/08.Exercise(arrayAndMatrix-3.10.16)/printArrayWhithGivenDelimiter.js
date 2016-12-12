/**
 * Created by MARK-Max on 1.10.2016 г..
 */
function printArray(input){
    let delimeter = input[input.length-1];
    input.pop();
    console.log(input.join(delimeter))
}
printArray(['One','Two','Three','Four','Five','-'])