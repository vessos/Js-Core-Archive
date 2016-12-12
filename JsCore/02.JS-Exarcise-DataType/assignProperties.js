/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function assignProperties ([key1,value1,key2,value2,key3,value3]){
    let obj={};
    obj[key1]=value1;
    obj[key2]=value2;
    obj[key3]=value3;
    console.log(obj)
}
assignProperties(['name','gosho','age','99','work','education'])