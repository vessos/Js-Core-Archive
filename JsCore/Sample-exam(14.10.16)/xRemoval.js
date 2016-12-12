/**
 * Created by MARK-Max on 14.10.2016 г..
 */
function xRemoval(input) {
    let matrix = input.map(x=>x.toLowerCase()).map(x=>x.split(''));
    let checkmatrix=input.map(x=>x.split(''));
    let minLenght= 100;

    for(let row=0;row<matrix.length-2;row++){
        for(let col=0;col<matrix[row].length-2;col++){
           let char = matrix[row][col];
            if(matrix[row][col+2]==char&&
            matrix[row+1][col+1]==char&&
            matrix[row+2][col]==char&&
            matrix[row+2][col+2]==char){
                checkmatrix[row][col]='';
                checkmatrix[row][col+2]='';
                checkmatrix[row+1][col+1]='';
                checkmatrix[row+2][col]='';
                checkmatrix[row+2][col+2]='';
            }
        }

    }
    for(let row of checkmatrix){
        console.log(row.join(''))
    }
}
xRemoval([ 'abnbjs', 'xoBab', 'Abmbh', 'aabab', 'ababvvvv' ])