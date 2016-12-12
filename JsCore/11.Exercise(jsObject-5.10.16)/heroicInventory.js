/**
 * Created by MARK-Max on 5.10.2016 г..
 */
function heroicInventory(input) {
    let result=[];
    let regex = /[\s+\/,]+/g;
    for (let arr of input) {
        let data = arr.split(regex)
         //console.log(data)
        let obj ={}
        let items=[];
        obj.name =data[0];
        obj.level=Number(data[1]);
        let newdata = data.slice(2);
        for(let arr1 of newdata){
            items.push(arr1);
        }
        obj.items = items;
        result.push(obj);
    }
    let json = JSON.stringify(result)
    console.log(json);
}
heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
])