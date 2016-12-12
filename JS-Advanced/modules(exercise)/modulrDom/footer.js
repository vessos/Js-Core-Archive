/**
 * Created by MARK-Max on 10.11.2016 г..
 */
let BaseElement = require('./baseElement');

class Footer extends BaseElement {
    constructor(message) {
        super();

        this.message = message;
    }

    getElementString() {
        return $('<footer>')
            .html('Copyright &copy; ' + this.message);
    }
}

module.exports = Footer;