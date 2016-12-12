/**
 * Created by MARK-Max on 15.10.2016 г..
 */
function notebook(input) {
    let result = {};
    let output = {};
    for (let leaf of input) {
        let arr = leaf.split('|');
        let colour = arr[0];
        let prop = arr[1];
        let value = arr[2];

        if (!result[colour]) {
            result[colour] = {
                'opponents': [],
                'wins': 1,
                'losses': 1
            };
        }
        switch (prop) {
            case 'age':
                result[colour]['age'] = value;
                break;
            case 'name':
                result[colour]['name'] = value;
                break;
            case 'win':
                result[colour].wins += 1;
                result[colour].opponents.push(value);
                break;
            case 'loss':
                result[colour].losses += 1;
                result[colour].opponents.push(value);
                break;
        }


    }
    let sortedColours;
    sortedColours=Object.keys(result).sort();
    for (let i in sortedColours) {
        let rank;
        rank = (result[sortedColours[i]].wins / result[sortedColours[i]].losses).toFixed(2);
        if (!result[sortedColours[i]].name || !result[sortedColours[i]].age) {
            continue;
        }
        output[sortedColours[i]] = {
            age: result[sortedColours[i]].age,
            name: result[sortedColours[i]].name,
            opponents: result[sortedColours[i]].opponents.sort(),
            rank: rank
        }
    }

    console.log(JSON.stringify(output));
}
notebook(['purple|age|99',
    'red|age|44',
    'blue|win|pesho',
    'blue|win|mariya',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Kiko',
    'purple|loss|Yana',
    'purple|loss|Yana',
    'purple|loss|Manov',
    'purple|loss|Manov',
    'red|name|gosho',
    'blue|win|Vladko',
    'purple|loss|Yana',
    'purple|name|VladoKaramfilov',
    'blue|age|21',
    'blue|loss|Pesho'])