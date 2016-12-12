/**
 * Created by MARK-Max on 16.10.2016 г..
 */
function radicalM(input) {
    let obj = {};
    for (let c of input) {
        if (c.length == 1) {
            if (!obj[c]) {
                obj[c] = {
                    counter:0,
                    counter2:0
                };
            }
        }
    }
    for (let item of input) {
        if (item.length > 1) {
            let arr = item.split('-');
            let first = arr[0];
            let second = arr[1];
            for (let i of Object.keys(obj)) {
                if (i == first) {
                    if(!obj[first][second]){
                        obj[first][second]=[];
                        obj[first].counter+=1;
                        obj[first].counter2+=1;
                    }
                    obj[first][second].push(second);
                    obj[first].counter2+=1;
                } else if (i == second) {
                    if (i == second) {
                        if (!obj[second][first]) {
                            obj[second][first] = [];
                            obj[second].counter+=1;
                            obj[second].counter2+=1;
                        }
                        obj[second][first].push(first);
                        obj[second].counter2+=1;
                    }
                }
            }
        }
    }
    let newobj={};
    let count =0;
    let count1=0;
    for(let j in  obj){
        if(obj[j].counter>count1){
            count1=obj[j].counter;
            count=j
        }
    }


    let number =1;
    if(count!=0){
        console.log(count);
        for(let item in obj[count]){
            if(item!='counter'){
                console.log(` ${number}. ${item}`)
                number++;
            }
        }
    }else{

        console.log(Object.keys(obj)[0] )
    }

    //console.log(count)
    console.log(obj)

}
radicalM(['A', 'B', 'C', 'D', 'A-B', 'B-A','C-A', 'D-A','B-A','B-A']
)
