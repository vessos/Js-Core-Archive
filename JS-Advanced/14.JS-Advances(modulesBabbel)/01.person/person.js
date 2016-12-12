/**
 * Created by MARK-Max on 4.11.2016 г..
 */
class  Person {
    constructor(name) {
        this.name = name;
    }

    toString() {
        return `I'm ${this.name}`
    }
}
module.exports = {Person};