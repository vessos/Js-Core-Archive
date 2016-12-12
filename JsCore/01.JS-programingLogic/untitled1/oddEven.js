/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function oddEvenProblem(num){
    if(Number(num)%2==0){
        console.log('even')
    }
    else if (Number(num)===Math.round(Number(num))){
        console.log('odd')
    }
    else{
        console.log('invalid')
    }
}
console.log(oddEvenProblem([1.1]));