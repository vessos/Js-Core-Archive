/**
 * Created by MARK-Max on 9.11.2016 г..
 */
let Employee = require('./employee');

class Manager extends Employee {
    constructor(name, age) {
        super(name, age);
        this.dividend = 0;

        this.tasks.push('scheduled a meeting.');
        this.tasks.push('is preparing a quarterly report.');
    }

    _calculateSalary() {
        return this.salary + this.dividend;
    }
}

module.exports = Manager;