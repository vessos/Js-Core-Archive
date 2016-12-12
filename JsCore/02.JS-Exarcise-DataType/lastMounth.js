function lastDay(nums) {
    let days;
    let year = Number(nums[2]);
    let obj = {1:31,2:28,3:31,4:30,5:30,
    6:30,7:31,8:31,9:30,10:31,11:30,12:31};
    let mounth = nums[1];
    let newmounth = Number(mounth)-1;
    if(newmounth<1){
        newmounth=12;
    }
    if((year%4==0&&year%100!=0)||(year%400==0)){
        obj[2]=29;
    }

        days = obj[newmounth];

    return days;
}
console.log(lastDay(['13','12','2004']));