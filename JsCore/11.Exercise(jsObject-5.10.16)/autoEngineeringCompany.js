/**
 * Created by MARK-Max on 11.10.2016 г..
 */
function autoEngeneering (input){
    let arr = [];
    for(let i of input){
        arr.push(i.split(' | '));
    }
       let map = new Map();;

    for(let i of arr){
        let [carModel,produceCar ]=[i[1],Number(i[2])];
        if(map.has(i[0])){
            map.get(i[0]).set(carModel,produceCar);
        }else{
            map.set(i[0],new Map());
            map.get(i[0]).set(carModel,produceCar)
        }

    }
    for(let [k,v]of map){
        console.log(k)
        for(let item of v){
            console.log(`###${item[0]} -> ${item[1]}`);
        }
    }
    //console.log(map)
}
autoEngeneering([ 'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200' ]
)