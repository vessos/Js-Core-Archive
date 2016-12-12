/**
 * Created by MARK-Max on 2.11.2016 г..
 */
function inheritToString() {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }

        toString() {
            let className = this.constructor.name;
            return `${className} (name: ${this.name}, email: ${this.email})`
        }
    }

    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, subject: ${this.subject})`;
        }
    }
    class Student extends Person{
        constructor(name,email,course){
            super(name,email);
            this.course=course;
        }
        toString(){
            let baseStr = super.toString().slice(0,-1);
            return baseStr+`, course: ${this.course})`;
        }
    }
    return{Person,Teacher,Student}
}
let p = new Person('Ivan','iban.abv.bg');
console.log(p.toString());
let t = new Teacher('Genadi','cecogenkov@tui.to','bezotgovornik');
console.log(t.toString());
let s = new Student('stamat','stamchi@bil.nh',6);
console.log(s.toString())