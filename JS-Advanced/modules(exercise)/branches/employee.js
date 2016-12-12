/**
 * Created by MARK-Max on 9.11.2016 г..
 */
class Employee {
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    toString() {
        return `${this.name}, ${this.age} (${this.position})`;
    }
}

module.exports = Employee;