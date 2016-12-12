/**
 * Created by MARK-Max on 11.11.2016 г..
 */
function reverseIterator (arr){
    let index = arr.length-1;
    return {
        next:function(){
            if(index>=0){
                return {value:arr[index--],done:false}
            }else{
                return {done:true}
            }
        }
    }
}
let p = reverseIterator([1,2,3,4,5])
console.log(p.next());
console.log(p.next())
console.log(p.next())
console.log(p.next())
console.log(p.next())
console.log(p.next())
console.log(p.next())
console.log(p.next())