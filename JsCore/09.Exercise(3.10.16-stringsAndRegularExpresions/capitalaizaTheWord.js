/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function capitalizeTheWord(input){
    'use strict'
    let str = input[0].toLowerCase();
    let str1=str.split(' ');
    for(let x=0; x<str1.length;x++){
        str1[x]=str1[x].split('');
        str1[x][0]=str1[x][0].toUpperCase();
        //let newchar = char.charCodeAt()-32;
        //let renamechar = String.fromCharCode(newchar);
        str1[x]=str1[x].join('');
    }
    console.log(str1.join(' '));
}
//capitalizeTheWord(['Was that Easy? tRY thIs onE for SiZe!'])
capitalizeTheWord(['Capitalize these words'])