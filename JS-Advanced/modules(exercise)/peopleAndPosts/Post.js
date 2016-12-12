/**
 * Created by MARK-Max on 10.11.2016 г..
 */
class Post {
    constructor(title, body, author) {
        this.title = title;
        this.body = body;
        this.author = author;
    }
    addToSelector(selector) {
        let postObj =
            $('<div>')
                .addClass('post ' + this.author)
                .append($('<h3>')
                    .addClass('title')
                    .text(this.title))
                .append($('<p>')
                    .addClass('body')
                    .text(this.body))
                .append($('<p>')
                    .addClass('author')
                    .text(this.author));

        $(selector)
            .append(postObj);
    }
}
module.exports = Post;