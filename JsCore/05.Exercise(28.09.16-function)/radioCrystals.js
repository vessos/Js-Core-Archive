/**
 * Created by MARK-Max on 29.9.2016 г..
 */
function radioCrystals(input){
    "use strict";
    let target=Number(input[0]);
    for(let i=1;i<=input.length-1;i++){
        let diamond = input[i];
        let count1=0;
        let count2=0;
        let count3=0;
        let count4=0;
        let count5=0;
        console.log(`Processing chunk ${diamond} microns`);

            while (diamond >= (4 * target)-1) {
                diamond = cuttting(diamond);
                count1++;
            }
            if(count1>0){
            console.log(`Cut x${count1}`);
            diamond = transporting(diamond);
            console.log('Transporting and washing');}

            while (diamond >= (target*1.2)-1) {
                diamond = lapping(diamond);
                count2++;
            }
            if(count2>0){
            console.log(`Lap x${count2}`);
            diamond = transporting(diamond);
            console.log('Transporting and washing');}

            while (diamond >= (target + 20)-1) {
                diamond = grinding(diamond)
                count3++;
            }
            if(count3>0){
            console.log(`Grind x${count3}`);
            diamond = transporting(diamond);
            console.log('Transporting and washing');}

            while (diamond >= (target+1)) {
                diamond = etching(diamond)
                count4++;
            }
            if(count4>0){
            console.log(`Etch x${count4}`);
            diamond = transporting(diamond);
            console.log('Transporting and washing');}

            if (diamond < target) {
                diamond = xraying(diamond)
                count5++;
                console.log(`X-ray x${count5}`);
            }


                console.log(`Finished crystal ${target} microns`);

    }
    function cuttting(nums){
        let cutt = (nums/4);
        return cutt;
    }
    function lapping(nums){
        let lapp = nums*0.8;
        return lapp;
    }
    function grinding(nums){
        let grindd =nums-20;
        return grindd;
    }
    function etching (nums){
       let etchh = nums-2;
        return etchh;
    }
    function xraying (nums){
        let xrayy = nums+1;
        return xrayy;
    }
    function transporting (nums){
        let trans = Math.floor(nums)
        return trans;
    }

}
radioCrystals([1375,50000])