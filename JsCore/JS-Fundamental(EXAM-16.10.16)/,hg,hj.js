/**
 * Created by MARK-Max on 16.10.2016 г..
 */
function main(input){

    let newMatrixLength = Number(input[0]);

    let newMatrix = [];
    let mainMatrix=[];

    for (let i = 1; i < 1 + newMatrixLength; i++){
        let currentRow = input[i].split(" ").map((x) => Number(x));
        newMatrix.push(currentRow);
    }
    for (let i = newMatrixLength+1; i < input.length; i++){
        let currentRow = input[i].split(" ").map((x) => Number(x));
        mainMatrix.push(currentRow);
    }
    let walkRight = 0;
    let walkDown = 0;
    let resultNum = 0;
    let resultChar ="";
    let resultString="";
    for(let row = 0; row < mainMatrix.length; row ++){
        for(let col = 0; col <mainMatrix[row].length; col++){
            let currentCell = mainMatrix[row][col];
            let decodingCell = newMatrix[walkDown][walkRight];
            let resultCell = currentCell+decodingCell;

            resultNum=resultCell%27;
            
            resultString+=rename(resultNum);
            
            walkRight++;
            if(walkRight==newMatrix[0].length){
                walkRight=0;
            }
        }
        walkDown++;
        walkRight=0;
        if (walkDown == newMatrixLength){
            walkDown=0;

        }
    }
    console.log(resultString)
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
}
main(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15']);