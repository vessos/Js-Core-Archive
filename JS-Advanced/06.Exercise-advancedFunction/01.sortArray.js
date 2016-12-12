/**
 * Created by MARK-Max on 29.10.2016 г..
 */
function sortArray(inputArray,sortedMethod){

        let ascComparator = (a,b)=>a-b;
        let dscComparator = (a,b)=>b-a;
        let sorting= {
                'asc':ascComparator,
                'desc':dscComparator
        };
    ;
    return inputArray.sort(sorting[sortedMethod])
}
console.log(sortArray([14, 7, 17, 6, 8], 'asc'))
//console.log(sortArray([14, 7, 17, 6, 8], 'desc'))