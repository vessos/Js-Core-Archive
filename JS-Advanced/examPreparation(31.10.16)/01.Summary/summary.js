/**
 * Created by MARK-Max on 31.10.2016 г..
 */
function summary(selector) {

    let button = $(selector);
    button.on('click', function () {
        let parrent = $('#content').parent();
        let text = $('#content strong');
        let newText ='' ;//$('#content strong').text();
       for (let strangtext of text) {
           newText += strangtext.textContent
       }
        let Div = $('<div></div>');
        Div.attr('id', 'summary');
        let h2 = $('<h2>Summary</h2>');
        h2.appendTo(Div);
        let par = $(`<p>${newText}</p>`);
        par.appendTo(Div);
        Div.appendTo($(parrent))

    });
    //console.log(newText);
}