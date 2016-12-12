/**
 * Created by MARK-Max on 3.10.2016 г..
 */
function captureTheNumbers (input){
    let text =  input.join(' ');
    let result=[];
    let pattern = '\\d+';
    let regex =new RegExp(pattern,'g');
    let out = text.match(regex);

    console.log(out.join(' '));
}
captureTheNumbers(['The300','What is that?', 'I think it’s the 3rd movie.','Lets watch it at 22:45'])