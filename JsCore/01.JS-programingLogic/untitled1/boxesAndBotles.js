function fillBottles(num){
    let numerOfBottles = Number(num[0]);
    let countOfBox = Number(num[1]);
    let needBoxes = Math.ceil(numerOfBottles/countOfBox);

    return needBoxes;
}

console.log(fillBottles(['15','7']));
