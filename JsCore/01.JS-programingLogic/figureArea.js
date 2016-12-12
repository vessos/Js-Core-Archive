/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function figurearea (data){
    let s1 =Number(data[0])*Number(data[1]);
    let s2 =Number(data[2])*Number(data[3]);
    let s3 = Math.min(Number(data[0]),Number(data[2]))*Math.min(Number(data[1]),Number(data[3]));
    let area = s1+s2-s3;
    return area;
}
console.log(figurearea (['2','4','5','3']))