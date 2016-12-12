/**
 * Created by MARK-Max on 2.10.2016 г..
 */
function sortArray(input){
    input.sort((a,b)=>a>b);
    input.sort((a,b)=>a.length>b.length);

    console.log(input.join('\n'));
}
//sortArray(['alpha','beta','gamma'])
sortArray(['Isacc','Theodor','Jack','Harrison','George'])