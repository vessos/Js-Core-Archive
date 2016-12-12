/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function validityChecker (input){
    "use strict";
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let input1 = [x1,y1,0,0];
    let input2 = [x2,y2,0,0];
    let input3 = [x1,y1,x2,y2];
    let distance1=distanceBtwPoint(input1);
    let distance2 =distanceBtwPoint(input2);
    let distance3 =distanceBtwPoint(input3);
    if(distance1/Math.round(distance1)===1||distance1==0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`)
    }
    if(distance2/Math.round(distance2)===1||distance2==0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`)
    }
    else{
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`)
    }
    if(distance3/Math.round(distance3)===1||distance3==0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`)
    }
    else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`)
    }
    function distanceBtwPoint(input){
        let x11 = Number(input[0]);
        let y11 = Number(input[1]);
        let x21 = Number(input[2]);
        let y21 = Number(input[3]);
        let sideA=Math.abs(x11-x21);;
        let sideB=Math.abs(y11-y21);
        let distance=Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2));
        return distance;
    }
}
validityChecker (['2','1','1','1'])