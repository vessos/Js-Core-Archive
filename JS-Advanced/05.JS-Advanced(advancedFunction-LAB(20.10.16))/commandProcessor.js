/**
 * Created by MARK-Max on 24.10.2016 г..
 */
function processCommands(commands){
let commandProcessor = (function(){
    let text ='';
    return{
        append:(t)=>text=text+t,
        removeStart: (count)=>text=text.slice(count),
        removeEnd:(count)=>text=text.slice(0,text.length-count),
        print:function(){console.log(text)}

    };
})();
  for (let cmd of commands ){
      let [cmdName,arg]=cmd.split(' ');
      commandProcessor[cmdName](arg);
  }
}
processCommands(['append 123','append 45','removeStart 2','removeEnd 1','print'])


