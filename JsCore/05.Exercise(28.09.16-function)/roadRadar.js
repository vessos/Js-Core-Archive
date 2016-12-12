/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function roadRadar(input){

    let speed = Number(input[0]);
    let area = input[1];
    let obj = {'motorway':130,'interstate':90,'city':50,residential:20};
    let overspeed = speed-obj[area];
    if(overspeed>40){
       console.log('reckless driving')
    }
    else if(overspeed>20){
       console.log('excessive speeding')
    }
    else if(overspeed>=1){
        console.log('speeding')
    }
    else{
        console.log(' ')
    }
}
roadRadar([60,'city']);
