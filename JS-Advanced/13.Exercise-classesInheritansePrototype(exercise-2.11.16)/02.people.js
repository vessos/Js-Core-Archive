/**
 * Created by MARK-Max on 2.11.2016 г..
 */
//function employers() {

    class Employee {
        constructor(name, age) {
            if(new.target===Employee){
                throw new Error("Cannot instance directly.")
            }
            this.name = name;
            this.age = age;
            this.salary = 0;
            this.tasks = [];
        }

        work() {
           //for (let i of this.tasks) {
           //    console.log(`${this.name}${i}`)
           //}
            let currentTask = this.tasks.shift();
            console.log(this.name+currentTask);
            this.tasks.push(currentTask);
        }

        collectSalary() {
            console.log(`${this.name} received ${this.getSalary()} this month.`)
        }

        getSalary() {
            return this.salary;
        }
    }
    class Junior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(` is working on a simple task.`)
        }
    }
    class Senior extends Employee {
        constructor(name, age) {
            super(name, age);
            this.tasks.push(` is working on a complicated task.`);
            this.tasks.push(` is taking time off work.`);
            this.tasks.push(` is supervising junior workers.`);
        }
    }
    class Manager extends Employee {
        constructor(name, age) {
            super(name, age);
            this.dividend = 0;
            this.tasks.push(` scheduled a meeting.`);
            this.tasks.push(` is preparing a quarterly report.`);
        }

        getSalary() {
            return this.salary + this.dividend;
        }
    }
   let s = new Senior('Gosho',22);
   s.work();
s.work();
s.work();
    console.log(s.collectSalary());
    //return{Employee,Junior,Senior,Manager}
