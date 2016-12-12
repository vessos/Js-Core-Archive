/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function repeatString ([input,repeat]){
    str = ''
    for(let i =0;i<repeat;i++){
        str+=input
    }
    console.log(str)
}
repeatString(['repeat',5])