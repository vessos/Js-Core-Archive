/**
 * Created by MARK-Max on 4.11.2016 г..
 */
function melons() {

    class Melon {
        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new TypeError("Abstract class cannot be instantiated directly");
            }
            this.weight = weight;
            this.melonSort = melonSort;
        }
    }
    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
            this.name = this.constructor.name.slice(0, this.constructor.name.length - 5);
        }

        toString() {
            let str = `Element: ${this.name}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
            return str;
        }
    }
    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
            this.name = this.constructor.name.slice(0, this.constructor.name.length - 5);
        }

        toString() {
            let str = `Element: ${this.name}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
            return str;
        }
    }
    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
            this.name = this.constructor.name.slice(0, this.constructor.name.length - 5);
        }

        toString() {
            let str = `Element: ${this.name}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
            return str;
        }
    }
    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
            this.name = this.constructor.name.slice(0, this.constructor.name.length - 5);
        }

        toString() {
            let str = `Element: ${this.name}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
            return str;
        }
    }
    class Melolemonmelon extends Airmelon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.elementIndex = this.weight * this.melonSort.length;
            this.count = 1;
            this.name = 'Water';
        }

        morph() {
            let obj = {
                0: 'Water',
                1: 'Fire',
                2: 'Earth',
                3: "Air"
            };
            let name = this.count % 4;
            this.count++;
            this.name = obj[name];
            return this.name
        }

        toString() {
            let str = `Element: ${this.name}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`
            return str;
        }
    }
    return {Melon,Watermelon,Firemelon,Earthmelon,Airmelon,Melolemonmelon}
}
let classes = melons();
let Melon = classes.Melon;
let Watermelon = classes.Watermelon;
let Firemelon = classes.Firemelon;
let Earthmelon = classes.Earthmelon;
let Airmelon = classes.Airmelon;
let Melolemonmelon = classes.Melolemonmelon;

//let test = new Melon(100, "Test");
//Throws error

//let watermelon = new Watermelon(12.5, "Kingsize");
//console.log(watermelon.toString());

let blue = new Melolemonmelon(12.5, 'Kingsize');
blue.morph()

console.log(blue.toString())
// Element: Water
// Sort: Kingsize
// Element Index: 100
