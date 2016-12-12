/**
 * Created by MARK-Max on 11.10.2016 г..
 */
function userNames (input){
    let users = [];
    for(let w of input){
        users.push(w)
    }
    function sortingName (a,b){
        if(a.length<b.length){
            return -1;
        }
        if(a.length>b.length){
            return 1;
        }
        return a.localeCompare(b);
    }
    users.sort(sortingName);
    for(let i of users)
       console.log(i)

}
userNames([ 'Ashton',
    'Kutcher',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston' ]
)