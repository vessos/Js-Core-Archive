/**
 * Created by MARK-Max on 13.11.2016 г..
 */
class MailBox {
    constructor(){
        this.mailMassage =[];
        this.messageCount = 0;
    }
    addMessage(subject,text){
        this.mailMassage.push({subject:subject,text:text})
        this.messageCount++;
        return this;
    }
    deleteAllMessages(){
         this.mailMassage=[];
         this.messageCount=0;
        return this;
    }
    findBySubject(substr){
        let pattern = substr;
        let container = [];
        for(let message of this.mailMassage){
            if(message.text.match(pattern)){
                container.push(message)
            }
        }
        return container;
    }
    toString(){
        let str = '';
        if(this.mailMassage.length==0){
            str+=` * (empty mailbox)`
        }else{
            for(let i=0;i< this.mailMassage.length;i++){
                if(i==this.mailMassage.length-1){
                    str+=` * [${this.mailMassage[i].subject}] ${this.mailMassage[i].text}`
                }else{
                    str+=` * [${this.mailMassage[i].subject}] ${this.mailMassage[i].text}\n`
                }

            }
        }
        return str;
    }

}

let mb = new MailBox();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
mb.addMessage("meeting", "Let's meet at 17/11");
mb.addMessage("beer", "Wanna drink beer tomorrow?");
mb.addMessage("question", "How to solve this problem?");
mb.addMessage("Sofia next week", "I am in Sofia next week.");
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);
console.log("Messages holding 'rakiya': " +
    JSON.stringify(mb.findBySubject('rakiya')));
console.log("Messages holding 'ee': " +
    JSON.stringify(mb.findBySubject('ee')));

mb.deleteAllMessages();
console.log("Msg count: " + mb.messageCount);
console.log('Messages:\n' + mb);

console.log("New mailbox:\n" +
    new MailBox()
        .addMessage("Subj 1", "Msg 1")
        .addMessage("Subj 2", "Msg 2")
        .addMessage("Subj 3", "Msg 3")
        .toString());
