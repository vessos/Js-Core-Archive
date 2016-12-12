/**
 * Created by MARK-Max on 30.9.2016 г..
 */
function equalNeighborsCount(matrixRows) {
    let matrix = matrixRows.map(
        row => row.split(' '));
    let neighbors = 0;
    for (let rows = 0; rows < matrix.length-1; rows++)
        for (let col = 0; col < matrix[rows].length; col++) {
            if (matrix[rows][col] == matrix[rows + 1][col]) {
                    neighbors++;
            }
            if(matrix[rows][col] == matrix[rows][col+1]){
                neighbors++;
            }
            if(rows==matrix.length-2&&matrix[rows+1][col] == matrix[rows+1][col+1]){
                neighbors++;
            }
        }


    return neighbors;
}
//console.log(equalNeighborsCount(['test yes yo ho','well done yo 6','not done yet 5']))
console.log(equalNeighborsCount(['2 2 2 2','2 2 2 2']))