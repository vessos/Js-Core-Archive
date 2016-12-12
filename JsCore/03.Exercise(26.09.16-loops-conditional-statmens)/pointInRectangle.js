/**
 * Created by MARK-Max on 26.9.2016 г..
 */
function pointInRect(point){
    let x = Number(point[0]);
    let y = Number(point[1]);
    let xMin = Number(point[2]);
    let xMax = Number(point[3]);
    let yMin = Number(point[4]);
    let yMax = Number(point[5]);

    if((x>=xMin&&x<=xMax)&&(y>=yMin&&y<=yMax)){
        console.log('inside')
    }
    else{
        console.log('outside')
    }
}
pointInRect([2,-3,2,12,-3,3]);