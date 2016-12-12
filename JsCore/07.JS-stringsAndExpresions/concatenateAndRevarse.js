/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function concatenateAndReverse (input){
    let allstrings = input.join('');
    let masstring = Array.from(allstrings)
    masstring.reverse();
    console.log(masstring.join(''))
}
concatenateAndReverse(['I','am','student'])
