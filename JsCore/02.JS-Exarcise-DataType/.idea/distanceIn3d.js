/**
 * Created by MARK-Max on 21.9.2016 г..
 */
function distanceBetweenPoints(distance){
    let  point1X = Number(distance[0]);
    let  point1Y = Number(distance[1]);
    let  point1Z = Number(distance[2]);
    let  point2X = Number(distance[3]);
    let  point2Y = Number(distance[4]);
    let  point2Z = Number(distance[5]);

    let sideA = Math.abs(point1X-point2X);
    let sideB = Math.abs(point1Y-point2Y);
    let sideZ = Math.abs(point1Z-point2Z);

         distanceBTP = Math.sqrt(sideA*sideA+sideB*sideB+sideZ*sideZ);


    console.log(distanceBTP);

}
distanceBetweenPoints([3.5,0,1,0,2,-1])