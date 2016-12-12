/**
 * Created by MARK-Max on 10.11.2016 г..
 */
function summary(selector){
    let btn = $(selector)
    let strongWord = $('#content strong').text();
    let container =$('#content').parent();
    console.log(container)
    btn.on('click',function(){
        let div=$('<div>');
        div.attr('id','summary');
        div.append('<h2>Summary</h2>');
        div.append(`<p>${strongWord}</p>`);
        container.append(div);
    })
}