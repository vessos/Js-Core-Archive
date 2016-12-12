/**
 * Created by MARK-Max on 2.10.2016 г..
 */
function magicMatrix (input){
    let result = 0;
    let isrowtrue = true;
    let iscolltrue = true;
    let matrix  = input.map(row=>row.split(' ').map(Number));
    for(let row of matrix){
        let sum =0;
        for(let i = 0;i<row.length;i++){
            sum+=row[i];
        }
        if(result==0){
            result=sum;
        }
        if(result!=sum){
            isrowtrue=false;
        }
    }
    for(let col =0;col<matrix[0].length;col++){
        let sumcoll=0;
        for(let row =0;row<matrix.length;row++){
            sumcoll+=matrix[row][col];
        }
        if(sumcoll!=result){
            iscolltrue=false;
        }
    }
    if(iscolltrue&&isrowtrue){
        console.log(true)
    }
    else{
        console.log(false)
    }
}
magicMatrix(['4 5 6', '6 5 4', '5 5 5' ])