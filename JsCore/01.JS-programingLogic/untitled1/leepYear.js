/**
 * Created by MARK-Max on 20.9.2016 г..
 */
function leepYear(year){
    let leep
    let thisYear = Number(year);
    if((thisYear%4==0&&thisYear%100!=0)||(thisYear%400==0)){
         leep = "yes";
    }
    else
    {
        leep = "no"
    }
    return leep;
}

console.log(leepYear([]));