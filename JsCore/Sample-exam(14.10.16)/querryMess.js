/**
 * Created by MARK-Max on 14.10.2016 г..
 */
function queryMess(input){
    let regex =/([^=&?]+)=([^=&?]+)/g;
    let pattern =/(\+|%20)+/g;
    let key;
    let value;
    let match;

    for(let i of input){
        let obj={};
             match =regex.exec(i)
        while(match){
            key=match[1].replace(pattern,' ').trim();
            value=match[2].replace(pattern,' ').trim();
            if(!obj[key]){
                obj[key]=[value];
            }else{
                obj[key].push(value);
            }
            match=regex.exec(i)
        }
        let print=``
            for(let key in obj){
               print+=`${key}=[${obj[key].join(', ')}]`
            }

        console.log(print)
    }
}
queryMess([ 'foo=%20foo&value=+val&foo+=5+%20+203',
   ' foo=poo%20&value=valley&dog=wow+',
   ' url=https://softuni.bg/trainings/coursesinstances/details/1070',
'https://softuni.bg/trainings.asp?trainer=nakov&course=oop&course=php' ])