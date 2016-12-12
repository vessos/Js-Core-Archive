/**
 * Created by MARK-Max on 1.11.2016 г..
 */
class circle {
    constructor (radius){
        this.radius = radius;
    }
    get diameter(){
        return 2*this.radius;
    }
    set diameter(diameter){
        this.radius=diameter/2;
    }
    get area() {
        return Math.PI*this.radius*this.radius;
    }
}

let c = new circle(5);
console.log(c.diameter);
console.log(c.area);
c.diameter=5;
console.log(c.diameter);
console.log(c.area);
console.log(c.radius)