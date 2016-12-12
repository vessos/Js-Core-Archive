/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function sumVat(nums) {
    let sum = 0;
    for(let i =0 ; i<nums.length ;i++){
        sum +=Number(nums[i]);
    }
    let vat = sum * 0.2;
    let total = sum * 1.2;
    console.log("sum = "+sum);
    console.log("VAT = "+vat);
    console.log("total = "+total);
}
sumVat([2,3,4]);