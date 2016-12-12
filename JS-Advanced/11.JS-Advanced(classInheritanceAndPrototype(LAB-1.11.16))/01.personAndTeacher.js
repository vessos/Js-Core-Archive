/**
 * Created by MARK-Max on 2.11.2016 г..
 */
function personAndTeacher () {
    class Person {
        constructor(name, email) {
            this.name = name;
            this.email = email;
        }
    }


    class Teacher extends Person {
        constructor(name, email, subject) {
            super(name, email);
            this.subject = subject;

        }
    }
    return {Person,Teacher};
}
let t = new Teacher('Pesho','pesho@gmail.com','math');
console.log(`Teacher: ${t.name} (${t.email} subject:${t.subject})`)