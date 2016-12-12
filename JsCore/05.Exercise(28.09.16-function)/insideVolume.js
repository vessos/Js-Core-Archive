/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function insideVolume(item){
    item=item.map(Number)
    for(let i =0;i<=item.length-1;i+=3){
        let x =item[i];
        let y =item[i+1];
        let z =item[i+2];
        if(volumePoint(x,y,z)==true){
            console.log('inside')
        }
        else{
            console.log('outside')
        }
    }
    function volumePoint (x,y,z){
        "use strict";
        let x1 = 10;
        let x2 = 50;
        let y1=20;
        let y2 = 80;
        let z1=15;
        let z2=50;
        if(x>=x1&&x<=x2){
            if(y>=y1&&y<=y2){
                if(z>=z1&&z<=z2){
                    return true;
                }
            }
        }
        else{
            return false;
        }
    }
}
insideVolume([13.1,50,31.5,50,80,50,-5,18,43])