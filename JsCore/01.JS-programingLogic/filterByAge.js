/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function filterByage ([minAge,nameA,ageA,nameB,ageB]){
    let personA = {name:nameA ,age:Number(ageA)};
    let personB = {name:nameB,age:Number(ageB)};
    if(minAge<=personA.age){
        console.log(personA)
    }
    if(minAge<=personB.age){
        console.log(personB)
    }
}
filterByage (['12','Ivan','15','Asen','9'])