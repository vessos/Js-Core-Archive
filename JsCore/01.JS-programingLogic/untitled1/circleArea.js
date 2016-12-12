/**
 * Created by MARK-Max on 20.9.2016 г..
 */
function circleArea(radius) {
    let r = Number(radius[0]);
    let area = ((Math.PI)*r*r);
    //console.log(area);
    let area1 = Number(area.toFixed(2));
    //console.log(area1);
    return [area,area1]
}

console.log (circleArea(['3']))