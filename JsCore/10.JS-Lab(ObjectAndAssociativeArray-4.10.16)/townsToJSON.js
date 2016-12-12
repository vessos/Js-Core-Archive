/**
 * Created by MARK-Max on 4.10.2016 г..
 */
function townsToJSON (input) {
    let str = input.slice(1);
    let result = [];
    let Jobj = [];
    for (let i of str) {
        result = i.split(/\s*\|\s*/).filter(a=>a !== '');
        let obj = {};
        obj.Town = result[0];
        obj.Latitude = Number(result[1]);
        obj.Longitude = Number(result[2]);
        Jobj.push(obj);
    }
    let json = JSON.stringify(Jobj)
    console.log(json);
}




townsToJSON(['| Town | Latitude | Longitude |',
   '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])