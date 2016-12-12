/**
 * Created by MARK-Max on 5.10.2016 г..
 */
function cappyJuice(input){
    let obj={};
    let obj1 = {};
    for(let w of input) {
        let arr = w.split(/ => /);
        if (arr[1] < 1000) {
            if (obj[arr[0]] == undefined) {
                obj[arr[0]] = Number(arr[1]);
            }
            else {
                obj[arr[0]] += Number(arr[1]);
            }
        }
        else {
            if (obj1[arr[0]] == undefined) {
                obj1[arr[0]] = Number(arr[1]);
            }
            else {
                obj1[arr[0]] += Number(arr[1]);
            }
        }
        for(let k of Object.keys(obj)){
            if(obj[k]>=1000 && obj1[k]==undefined) {
                    obj1[k] = obj[k];
                    obj[k]=0;
            }
        }
    }
    for(let key of Object.keys(obj) ){
           if(obj1[key]==undefined ){
               obj1[key]=obj[key];
           }
           else {
               obj1[key]+=obj[key];
           }
    }
    for(let p of Object.keys(obj1)) {
        if(obj1[p]>=1000) {
            console.log(`${p} => ${Math.floor(obj1[p] / 1000)}`)
        }
    }
}
cappyJuice([ 'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
   'Kiwi => 4567',
   'Pear => 5678',
   'Watermelon => 6789'
])