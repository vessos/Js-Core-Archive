/**
 * Created by MARK-Max on 2.10.2016 г..
 */
function extractSubsequence (input) {
    input= input.map(Number);
    let maxelement = Number.NEGATIVE_INFINITY;
    let result =[];
    for(let i of input)
    {
        if(i>=maxelement){
            result.push(i);
            maxelement = i;
        }
    }
    console.log(result.join('\n'));
}
extractSubsequence([1,3,8,4,10,12,3,2,24])