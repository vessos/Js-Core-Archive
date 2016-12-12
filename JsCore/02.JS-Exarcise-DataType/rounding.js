/**
 * Created by MARK-Max on 21.9.2016 г..
 */
function rounding(nums){
    let num = Number(nums[0]);
    let countround = Number(nums[1]);
    if(countround>15)
    {
        countround=15;
    }
    let roundnum = Number(num.toFixed(countround));
  console.log(roundnum);
}
rounding([-3.34274,3])