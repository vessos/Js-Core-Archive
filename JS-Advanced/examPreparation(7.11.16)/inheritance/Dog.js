/**
 * Created by MARK-Max on 9.11.2016 г..
 */
let Entity = require('./Entity');

class Dog extends Entity {
    constructor(name) {
        super(name);
    }

    saySomething() {
        return `${this.name} barks!`;
    }
}

module.exports = Dog;