/**
 * Created by MARK-Max on 21.9.2016 г..
 */
function speedObj([a,b,c]){
    let speedObj1 = Number(a);
    let speedObj2 = Number(b);
    let time = (Number(c))/3600;
    let distanceObj1 = speedObj1*time;
    let distanceObj2 = speedObj2*time;
    let distanceBetweenObj = Math.abs(distanceObj1-distanceObj2);
    console.log(distanceBetweenObj*1000);
}
speedObj(['11','10','120']);