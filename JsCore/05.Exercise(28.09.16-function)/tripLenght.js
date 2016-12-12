/**
 * Created by MARK-Max on 29.9.2016 г..
 */
function tripLenght (input){
    "use strict";
    let x1 = Number(input[0]);
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let y3 = Number(input[5]);
    let distancePoint1to2 = distanceBPoint(x1,y1,x2,y2);
    let distancePoint2to3 = distanceBPoint(x2,y2,x3,y3);
    let distancePoint1to3 = distanceBPoint(x1,y1,x3,y3);
    let shortDistance = Math.min(distancePoint1to2,distancePoint1to3,distancePoint2to3);
    let longDistance = Math.max(distancePoint2to3,distancePoint1to3,distancePoint1to2);
    let full =distancePoint1to2+distancePoint1to3+distancePoint2to3;
    let middleDistance = full-(shortDistance+longDistance);
    let point1=0;
    let point2 =0;

    if(shortDistance==distancePoint1to2||(shortDistance==distancePoint1to2&&shortDistance==distancePoint1to3)||
        (shortDistance==distancePoint1to2&&shortDistance==distancePoint2to3)){
        point1 = distancePoint1to2;
    }
    else if(shortDistance==distancePoint1to3||(shortDistance==distancePoint2to3&&shortDistance==distancePoint1to3)){
        point1 =distancePoint1to3;
    }
    else{
        point1 =distancePoint2to3;
    }
    if(middleDistance==distancePoint1to2||(middleDistance==distancePoint1to2&&middleDistance==distancePoint1to3)||
        (middleDistance==distancePoint1to2&&middleDistance==distancePoint2to3)){
        point2 = distancePoint1to2;
    }
    else if(middleDistance==distancePoint1to3.toFixed(14)||(middleDistance==distancePoint2to3.toFixed(14)&&middleDistance==distancePoint1to3.toFixed(14))){
        point2 =distancePoint1to3;
    }
    else{
        point2 =distancePoint2to3;
    }
    let curentdistance = point1+point2;
    if((point1==distancePoint1to2&&point2==distancePoint2to3)||(point2==distancePoint1to2&&point1==distancePoint2to3)){
        console.log(`1->2->3: ${curentdistance}`)
    }
    else if((point1==distancePoint2to3&&point2==distancePoint1to3)||(point2==distancePoint2to3&&point1==distancePoint1to3)){
        console.log(`1->3->2: ${curentdistance}`)
    }
    else if((point1==distancePoint1to3&&point2==distancePoint1to2)||(point2==distancePoint1to3&&point1==distancePoint1to2)){
        console.log(`2->1->3: ${curentdistance}`)
    }

    function distanceBPoint(x1,y1,x2,y2){
        let sideA = Math.abs(x1-x2);
        let sideB = Math.abs(y1-y2);
        let distance = Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2));
        return distance
    }
}
tripLenght([0,0,0,-0,-0,0])
//tripLenght ([-1,-2,3.5,0,0,2])
