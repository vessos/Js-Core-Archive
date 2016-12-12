/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function distanceBetweenPoint ([x1,y1,x2,y2]){
    let sideA = Math.abs(Number(x1)-Number(x2));
    let sideB = Math.abs(Number(y1)-Number(y2));
    let sideC = Math.sqrt(Math.pow(sideA,2)+Math.pow(sideB,2));
    return sideC
}
console.log(distanceBetweenPoint (['2','4','5','0']))