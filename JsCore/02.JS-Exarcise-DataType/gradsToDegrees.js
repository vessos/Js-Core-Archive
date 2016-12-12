/**
 * Created by MARK-Max on 21.9.2016 г..
 */
function gradToDegree(num){
    let grad = Number(num[0]);
    let degree = grad*0.9;
    degree = degree%360;
    if(degree<0){
        degree = degree+360;
    }

    console.log(degree);
}
gradToDegree([850])