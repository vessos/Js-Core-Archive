/**
 * Created by MARK-Max on 6.10.2016 г..
 */
function diagonalAttack (input){
    let arr =[];
    let sumMainDiagonal=0;
    let sumSecondaryDiagonal=0;
    for(let i =0 ;i<input.length;i++){
        arr.push((input[i].split(' ')).map(Number));
    }
    let matrix =[];
    for(let j=0;j<arr.length;j++){
        matrix[j]=(arr[j]);
    }
    for(let row =0;row<arr.length;row++ ){
        for(let col = 0; col<arr.length;col++){
            if(row==col){
                sumMainDiagonal+=matrix[row][col];
            }
            if((row+col)==matrix.length-1){
                sumSecondaryDiagonal+=matrix[row][col];
            }
        }
    }
    if(sumSecondaryDiagonal==sumMainDiagonal){
        for(let row =0;row<arr.length;row++ ){
            for(let col = 0; col<arr.length;col++){
                if(row!=col&&(row+col)!=matrix.length-1){
                    matrix[row][col]=sumMainDiagonal;
                }
            }
        }
    }
    for(let row=0;row<arr.length;row++){
        console.log(matrix[row].join(' '));
    }
}
diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)