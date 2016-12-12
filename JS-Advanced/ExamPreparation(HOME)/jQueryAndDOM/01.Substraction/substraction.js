/**
 * Created by MARK-Max on 7.11.2016 г..
 */
function subtract() {
    let firstNumber = $('#firstNumber').val();
    let secondNumber = $('#secondNumber').val();
    let sum = Number(firstNumber) - Number(secondNumber);
    $('#result').append(`<p>${sum}</p>`)

    let textArea = $('<textarea></textarea>');
    textArea.addClass('counter');
    textArea.attr('id', 'textarea');
    textArea.val(0);
    let button = $('<button>Increment</button>');
    let button2 = $('<button>Add</button>');
    let button3 = $('<button>Delete</button>')
    let button4 = $('<button>Up</button>')
    let list = $('<ul>');
    list.addClass('gosho');
    $('#wrapper').append(textArea);
    $('#wrapper').append(button);
    $('#wrapper').append(button2);
    $('#wrapper').append(button3);
    $('#wrapper').append(button4);
    $('#wrapper').append(list);
    let count = 0;
    button.on('click', function () {
        let counter = textArea.val();
        counter++;
        textArea.val(counter)
    })
    button2.on('click', function () {
        let values = textArea.val();
        console.log(values);
        count++;
        let li = $('<li>').attr('id', count);
        $('.gosho').append(li.text(values));

    });

    button3.on('click', function () {
        $('.gosho li:last').remove()
    })

    ;
    $('.gosho li:last').css('background', 'none');

    let bool = true;

    button4.on('click', function () {

        frow = $('.gosho li:last');
        console.log(frow.attr('id'))

        let before = frow.prev();
        frow.insertBefore(before);
        frow = before;
        beforea = before;
        frow.css('background', 'red');
        bool = false;


    })


}

