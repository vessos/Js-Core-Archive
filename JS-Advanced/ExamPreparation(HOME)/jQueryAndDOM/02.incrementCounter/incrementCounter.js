/**
 * Created by MARK-Max on 7.11.2016 г..
 */
function increment(selector){
    let container = $(selector);
    let textArea = $('<textarea>')
    textArea.addClass('counter');
    textArea.attr('disabled',true);
    textArea.val(0);
    let incrementBtn = $('<button>Increment</button>')
    let addBtn = $('<button>Add</button>');
    incrementBtn.addClass('btn');
    addBtn.addClass('btn');
    incrementBtn.attr('id','incrementBtn');
    addBtn.attr('id','addBtn');
    let list = $('<ul>');
    list.addClass('results');

    container.append(textArea);
    container.append(incrementBtn);
    container.append(addBtn);
    container.append(list);
    incrementBtn.on('click',function(){
       let counter =  textArea.val();
        textArea.val(++counter);
        //console.log(alert('eto me'))
    })
    addBtn.on('click',function(){
        let values = Number(textArea.val());
        list.append(`<li>${values}</li>`)
    })
}
