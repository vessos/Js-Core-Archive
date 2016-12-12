/**
 * Created by MARK-Max on 26.9.2016 г..
 */
function figure4Square (num){
    let n = Number(num[0]);
    if(n==2){
        console.log('+++')
    }
    else {
        if (n % 2 != 0) {
            for (let col = 1; col <= n; col++) {

                let line = ''
                for (let row = 1; row <= 2; row++) {
                    line += ('+')
                    line += '-'.repeat(n - 2);
                }
                line += '+';
                console.log(line);


                for (let i = 1; i <= ((n - 3) / 2); i++) {
                    let line = ''
                    for (let row = 1; row <= 2; row++) {
                        line += ('|')
                        line += ' '.repeat(n - 2);
                    }
                    line += '|';
                    console.log(line);

                }
                col += ((n - 3) / 2 + 1);
            }
            let line = ''
            for (let row = 1; row <= 2; row++) {
                line += ('+')
                line += '-'.repeat(n - 2);
            }
            line += '+';
            console.log(line);
        }
        else {
            for (let col = 1; col <= n; col++) {

                let line = ''
                for (let row = 1; row <= 2; row++) {
                    line += ('+')
                    line += '-'.repeat(n - 2);
                }
                line += '+';
                console.log(line);


                for (let i = 1; i <= ((n - 3 - 1) / 2); i++) {
                    let line = ''
                    for (let row = 1; row <= 2; row++) {
                        line += ('|')
                        line += ' '.repeat(n - 2);
                    }
                    line += '|';
                    console.log(line);

                }
                col += ((n - 3) / 2 + 1);
            }
            let line = ''
            for (let row = 1; row <= 2; row++) {
                line += ('+')
                line += '-'.repeat(n - 2);
            }
            line += '+';
            console.log(line);

        }

    }

}
figure4Square ([2])