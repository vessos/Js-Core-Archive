/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function countOcc ([str,text]){
    let p =-1;
    let count = 0;
    while(true){
        p=text.indexOf(str,p+1);
        if(p==-1){
            return count;
        }
        count++;
    }
}
console.log(countOcc(['Js','Ilike Js and i code Js all the time']))