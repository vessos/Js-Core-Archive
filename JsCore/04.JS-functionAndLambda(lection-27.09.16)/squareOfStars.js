/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function squareOfStars (n){
    "use strict";
    function print(count=n){
        console.log('*'+' *'.repeat(count-1))
    }
    for(let i =1 ;i<=n;i++){
        print()
    }
}
squareOfStars([5])
