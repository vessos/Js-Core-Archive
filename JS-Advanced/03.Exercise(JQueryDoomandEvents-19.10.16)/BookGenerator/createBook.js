/**
 * Created by MARK-Max on 19.10.2016 г..
 */
let createBook=(function solve (){
    let id=1;
     return function createBook(selector,title,author,ISBN){
        let container =$(selector);
        let fragment = document.createDocumentFragment();
        let Div = $('<div></div>');
        let titleBook = $('<p></p>');
        let authorBook = $('<p></p>');
        let isbn = $('<p></p>');
        let selectBtn = $('<button>Select</button>');
        let deselctBtn=$('<button>Deselect</button>');

        let generator = id;


        let idbook = 'book'+generator;
        Div.attr('id',idbook)
        titleBook.addClass('title');
        authorBook.addClass('author');
        isbn.addClass('isbn');
        titleBook.text(title);
        authorBook.text(author);
        isbn.text(ISBN);


        titleBook.appendTo(Div);
        authorBook.appendTo(Div);
        isbn.appendTo(Div);
        selectBtn.appendTo(Div);
        deselctBtn.appendTo(Div);
        Div.appendTo(fragment);
        container.append(fragment);
        id++;
         selectBtn.on('click',function (event) {
             $(this).parent().css('border','2px solid blue');
         });
         deselctBtn.on('click',function(event){
            let a= $(this).parent().css('border','none');

         });
    }
})();

