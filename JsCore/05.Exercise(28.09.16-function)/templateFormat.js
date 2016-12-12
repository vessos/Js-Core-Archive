/**
 * Created by MARK-Max on 28.9.2016 г..
 */
function templateFormat(input){
    "use strict";
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>')
    for(let i =0 ;i<=input.length-1;i+=2) {
        let question = input[i];
        console.log('<question>');
        console.log(question);
        console.log('</question>');
        let answer = input[i+1];
        console.log('<answer>');
        console.log(answer);
        console.log('</answer>');

    }
    console.log('</quiz>')

}
templateFormat(['georgi','vase'])