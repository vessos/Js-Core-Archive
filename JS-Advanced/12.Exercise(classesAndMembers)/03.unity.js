/**
 * Created by MARK-Max on 3.11.2016 г..
 */
class Rat{
    constructor(name){
        this.name=name;
        this.rats = [];
    }
    unite(otherRat){
        let unique = true;
        for(let p in this.rats){
            if(otherRat==p){
                unique=false;
            }
        }
        if(unique){
            this.rats.push(otherRat);
        }
    }
    getRats(){
        return this.rats
    }
    toString(){
        let str = `${this.name} \n`;
        for(let rat of this.rats){
            str+=`##${rat}\n`;
        }
        return  str.trim();
    }
}
let test = new Rat("Pesho");
console.log(test.toString()); //Pesho

console.log(test.getRats()); //[]

test.unite(new Rat("Gosho"));
test.unite(new Rat("Sasho"));
console.log(test.getRats());
//[ Rat { name: 'Gosho', unitedRats: [] },
//  Rat { name: 'Sasho', unitedRats: [] } ]

console.log(test.toString());
// Pesho
// ##Gosho
// ##Sasho
