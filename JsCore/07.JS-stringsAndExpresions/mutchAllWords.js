/**
 * Created by MARK-Max on 5.10.2016 г..
 */
function matchAllDates(input){
    if (Array.isArray(input)){
        input = input[0];
    }

    let pattern = /\d{1,2}-\w{3}-\d{4}/g
    console.log (input.match(pattern));
}