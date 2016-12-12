/**
 * Created by MARK-Max on 22.9.2016 г..
 */
function fruitsOrVegetables(data){
    let item = data[0];

    switch(item){
        case 'banana':
        case 'apple':
        case 'kiwi':
        case 'cherry':
        case 'lemon':
        case 'grapes':
        case 'peach':
            console.log('fruit');
            break;
        case 'tomato':
        case 'cucumber':
        case 'pepper':
        case 'onion':
        case 'garlic':
        case 'parsley':
            console.log('vegetable');
            break;
        default: console.log('unknown');

    }
}
fruitsOrVegetables(['pepper'])