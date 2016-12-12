/**
 * Created by MARK-Max on 5.10.2016 г..
 */
function storeCatalog (input){
    let maps = new Map();
    let array =[];
    for(let i of input){
        let arr = i.split(' : ');
        let k = arr[0];
        let v = arr[1];
        maps.set(arr[0],arr[1])
    }
    let mapAsc = new Map([...maps.entries()].sort());
    let newmap = new Map();
    for(let [k,v] of mapAsc ){
        if(newmap.has(k[0])){
            newmap.get(k[0]).set(k,v)
        }
        else{
            newmap.set(k[0],new Map())
            newmap.get(k[0]).set(k,v)
        }
    }
    for(let [k,v] of newmap){
        console.log(k);
        for(let key of v){
            console.log(` ${key[0]}: ${key[1]}`)
        }
    }
    console.log(newmap)
}
storeCatalog([ 'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10' ])