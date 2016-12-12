/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function dayOfWeek (str){
    "use strict";
    switch(str[0]){
        case 'Monday':return 1;
        case 'Tuesday':return 2;
        case 'Wednesday':return 3;
        case 'Thursday':return 4;
        case 'Friday':return 5;
        case 'Saturday':return 6;
        case 'Sunday':return 7;
        default: return 'error'
    }
}
