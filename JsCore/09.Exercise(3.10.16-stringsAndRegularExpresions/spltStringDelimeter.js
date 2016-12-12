/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function splitString (input){
    let delimeter = input[1];
    let str = input[0].split(delimeter);
   for(let i of str){
       console.log(i)
   }
}
splitString(['One-Two-Three-Four-Five','-'])