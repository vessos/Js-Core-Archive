/**
 * Created by MARK-Max on 21.9.2016 г..
 */
function precent(data){
    let sum = Number(data[0]);
    let interest = Number(data[1]);
    let comPeriod = Number(data[2]);
    let totalPeriod = Number(data[3]);


    let interest1 = (interest/100);
    let comfrequency = (12/comPeriod);

    let fullPeriodInterest = sum*(Math.pow((1+interest1/comfrequency),comfrequency*totalPeriod));
    fullPeriodInterest=fullPeriodInterest.toFixed(2);

    console.log(fullPeriodInterest);

}
precent([1500,4.3,3,6])