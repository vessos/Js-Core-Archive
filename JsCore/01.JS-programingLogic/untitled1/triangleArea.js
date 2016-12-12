/**
 * Created by MARK-Max on 20.9.2016 г..
 */
function triangleArea(nums){
    let a = Number(nums[0]);
    let b = Number(nums[1]);
    let c = Number(nums[2]);
    let high = (a+b+c)/2;
    let area = Math.sqrt(high*(high-a)*(high-b)*(high-c));
    return area;
}
  console.log(triangleArea(['2','3.5','4']));
