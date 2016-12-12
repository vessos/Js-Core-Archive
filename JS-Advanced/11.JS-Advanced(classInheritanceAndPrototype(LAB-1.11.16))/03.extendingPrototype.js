/**
 * Created by MARK-Max on 2.11.2016 г..
 */
function addclass() {
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
    class Student extends Person {
        constructor(name, email, course) {
            super(name, email);
            this.course = course;
        }

        toString() {
            let baseStr = super.toString().slice(0, -1);
            return baseStr + `, course: ${this.course})`;
        }
    }
    function extendPrototype(Class) {
        Class.prototype.species = "Human";
        Class.prototype.toSpeciesString = function () {
            return `I am a ${this.species}. ${this.toString()}`;
        }
    }
    return{Person,Student}
}
extendPrototype(Person);
let p = new Person('Gosho','gogo@a.de');
console.log(p.toString());
console.log(p.toSpeciesString());

let s = new Student('petko','pepi@a.de',5)
console.log(s.toString())
console.log (s.toSpeciesString());