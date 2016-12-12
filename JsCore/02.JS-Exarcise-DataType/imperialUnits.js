/**
 * Created by MARK-Max on 21.9.2016 г..
 */
function inchToFeet (num){
    let inch = Number(num[0]);
    let footh = inch/12;
    let footh1 = Math.floor(footh)
    let otherinch = Math.ceil((footh-footh1)*12);
    console.log(footh1+"\'"+"-"+otherinch+"\"")
}

inchToFeet ([11])