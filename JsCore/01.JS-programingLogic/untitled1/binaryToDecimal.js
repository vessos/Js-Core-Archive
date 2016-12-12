/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function binaryToDecimal(data){
    let x = data[0];
    let dec = 0;
    let b =0;
    for (let i = x.length - 1; i >= 0; i--) {
        let char = x.charAt(i);

        if (char) {
            dec += (Number(char)*Math.pow(2, b));
        }
        b++;
    }
    console.log(dec)

}
binaryToDecimal(['11110000']);