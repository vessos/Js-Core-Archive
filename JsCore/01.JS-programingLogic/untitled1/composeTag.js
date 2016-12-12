/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function composeTag(data){
    let fileLocation = data[0];
    let alternativeText = data[1];
    console.log('<img src=\"'+fileLocation+'\"'+' alt=\"'+alternativeText+'\">')
}
composeTag(['smiley.gif','smiley face'])