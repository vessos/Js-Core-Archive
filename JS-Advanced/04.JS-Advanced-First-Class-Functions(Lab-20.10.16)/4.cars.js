/**
 * Created by MARK-Max on 29.10.2016 г..
 */
   function createCar(commands){
    let map = new Map();
    let carManager = {
        create:function([name, ,parent]){
            parent = parent?map.get(parent):null;
            let newObj = Object.create(parent);
            map.set(name,newObj);
            return newObj;
        },
        set: function([name,key,value]){
            let obj = map.get(name);
            obj[key]=value;
        },
        print:function(name){
            let obj = map.get(name),objects=[];
            for(let key in obj){
                objects.push(`${key}:${obj[key]}`);
            }
            console.log(objects.join(', '))
        }
    };
    for(let command of commands){
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        carManager[action](commandParameters)
    }
}
createCar(['create c1','create c2 inherit c1','set c1 color red','set c2 model new','print c1','print c2'])



