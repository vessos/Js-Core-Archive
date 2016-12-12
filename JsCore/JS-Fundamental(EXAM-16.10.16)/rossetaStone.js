/**
 * Created by MARK-Max on 16.10.2016 г..
 */
function rossetaStone (index){
    let arr=[];
    for(let i of index){
      arr.push(i.split(' ')) ;
    }
    let tamplateLength = Number(index[0]);
    let matrix=[];
    let smallmatrix=[];
    for(let i=1;i<=tamplateLength;i++) {
        let row = arr[i].map(x=>Number(x));
        smallmatrix.push(row)
    }
    for(let i=tamplateLength+1;i<index.length;i++) {
        let row = arr[i].map(x=>Number(x));
        matrix.push(row)
    }
    let secondMatrix=[];
    for(let i=tamplateLength+1;i<index.length;i++) {
        let row = arr[i].map(x=>Number(x));
        secondMatrix.push(row)
    }

    for(let row=0;row<matrix.length;row++){
        for(let coll=0;coll<matrix[row].length;coll++){
            //if(row%2==0&&coll%2==0){
                secondMatrix[row][coll]=rename((matrix[row][coll]+smallmatrix[row%smallmatrix.length][coll%smallmatrix[0].length])%27);
            /*}else if(row%2==0&&coll%2!=0){
                secondMatrix[row][coll]=rename((matrix[row][coll]+smallmatrix[row%smallmatrix.length][coll%smallmatrix[0].length])%27);
            }else if (row%2!=0&&coll%2==0){
                secondMatrix[row][coll]=rename((matrix[row][coll]+smallmatrix[row%smallmatrix.length][coll%smallmatrix[0].length])%27);
            }else if(row%2!=0&&coll%2!=0){
                secondMatrix[row][coll]=rename((matrix[row][coll]+smallmatrix[row%smallmatrix.length][coll%smallmatrix[0].length])%27);
            }*/
        }

    }
    let newstr='';
    for(let i of secondMatrix){
        for(let j of i){
            newstr+=j;
        }
    }
    console.log(newstr)

    function rename (number){
        let str ;
        switch(number){
            case 0: str =' ';
                break;
            case 1: str ='A';
                break;
            case 2: str ='B';
                break;
            case 3: str ='C';
                break;
            case 4: str ='D';
                break;
            case 5: str ='E';
                break;
            case 6: str ='F';
                break;
            case 7: str ='G';
                break;
            case 8: str ='H';
                break;
            case 9: str ='I';
                break;
            case 10: str ='J';
                break;
            case 11: str ='K';
                break;
            case 12: str ='L';
                break;
            case 13: str ='M';
                break;
            case 14: str ='N';
                break;
            case 15: str ='O';
                break;
            case 16: str ='P';
                break;
            case 17: str ='Q';
                break;
            case 18: str ='R';
                break;
            case 19: str ='S';
                break;
            case 20: str ='T';
                break;
            case 21: str ='U';
                break;
            case 22: str ='V';
                break;
            case 23: str ='W';
                break;
            case 24: str ='X';
                break;
            case 25: str ='Y';
                break;
            case 26: str='Z';

        }
        return str;
    }
    //console.log(matrix)
    //console.log(smallmatrix)
    //console.log(secondMatrix)
}
rossetaStone([ '1',
   '1 3 13',
   '12 22 14 13 25 0 4 24 23',
   '18 24 2 25 22 0 0 11 18',
   '8 25 6 26 8 23 13 4 14',
   '14 3 14 10 6 1 6 16 14',
   '11 12 2 10 24 2 13 24 0',
   '24 24 10 14 15 25 18 24 1',
   '4 24 0 8 4 22 19 22 14',
   '0 11 18 26 1 19 18 13 15',
   '8 15 14 26 24 14 26 24 14']
)