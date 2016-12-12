/**
 * Created by MARK-Max on 3.11.2016 г..
 */
class Stringer {
    constructor(innerString,innerLength){
        this.innerString=innerString;
        this.innerLength=innerLength;
        this.vaskoworks=[];
    }
    increase(length){
        this.innerLength=this.innerLength+length;
    }
    decrease(length){
        this.innerLength=this.innerLength-length;
        if(this.innerLength<0){
            this.innerLength=0;
        }
    }
    toString(){
        let str='';
        if(this.innerLength<this.innerString.length){
            str+=this.innerString.slice(0,this.innerLength);
            str+=`...`
        }else{
            str+=this.innerString;
        }
        return str;
    }
}
let test= new Stringer('Test',5);
console.log(test.toString());
test.decrease(3);
console.log(test.toString());
test.decrease(7)
console.log(test.toString());
test.increase(4)
console.log(test.toString());