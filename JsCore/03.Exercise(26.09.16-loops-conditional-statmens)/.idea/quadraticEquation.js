/**
 * Created by MARK-Max on 26.9.2016 г..
 */
function quadraticEquation ([x1,x2,x3]){
    let a=Number(x1);
    let b = Number(x2);
    let c =Number(x3);

    let d = Math.pow(b,2)-4*a*c;
    if(d>0){

        let x1=(-(b)+Math.sqrt(d))/(2*a);
        let x2 =(-(b)-Math.sqrt(d))/(2*a);

        if(x1>x2){
            console.log(x2);
            console.log(x1);
        }
        else{
            console.log(x1);
            console.log(x2);
        }
    }
    else if(d<0){
        console.log('No');
    }
    else{
        console.log(-(b)/(2*a));
    }
}
quadraticEquation ([6,11,-35])