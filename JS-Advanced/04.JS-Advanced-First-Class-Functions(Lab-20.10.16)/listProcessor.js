/**
 * Created by MARK-Max on 29.10.2016 г..
 */
function proccesComands(commands) {
    let commandProcseor = (function () {
        let arr = [];
        return {
            add: function (newItem) {
                arr.push(newItem);
            },
            remove: function (item) {
                arr = arr.filter(x=>x != item)
            },
            print: function () {
                console.log(arr)
            }
        }
    })()
    for(let command of commands ){
        let [cmdName,arg]=command.split(' ');
        commandProcseor[cmdName](arg);
    }
}
commandProcseor.add('hello')
commandProcseor.add('again')
commandProcseor.remove('hello')
commandProcseor.add('again')
commandProcseor.print()