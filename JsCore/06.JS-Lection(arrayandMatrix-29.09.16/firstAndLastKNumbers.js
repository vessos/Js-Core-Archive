/**
 * Created by MARK-Max on 30.9.2016 г..
 */
function kNumbers(input){
    let n = Number(input[0]);
    let k = Number(input[1]);
    let result =[1];
    for(let i =1;i<n;i++){
    let first = Math.max(0,i-k);
        let sum =0;
        for(let j =first;j<i;j++){
            sum +=result[j]
        }
        result.push(sum)
    }
    console.log(result.join(', '));
}
kNumbers(['6','3'])