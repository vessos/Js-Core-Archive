/**
 * Created by MARK-Max on 9.11.2016 г..
 */
let Employee = require('./employee');

class Branch {
    constructor(id, branchName, companyName) {
        this.id = id;
        this.branchName = branchName;
        this.companyName = companyName;

        this._employees = [];
    }

    get employees() {
        return this._employees;
    }

    hire(employee) {
        this._employees.push(employee);
    }

    toString() {
        let output = `@ ${this.companyName}, ${this.branchName}, ${this.id}\n`;
        output += 'Employed:\n';
        if (this._employees.length == 0) {
            output += 'None…';
        } else {
            for (let employee of this.employees) {
                output += `** ${employee}\n`;
            }
        }

        return output.trim();
    }
}

module.exports = Branch;