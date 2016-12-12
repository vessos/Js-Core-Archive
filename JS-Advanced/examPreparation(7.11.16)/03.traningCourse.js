/**
 * Created by MARK-Max on 7.11.2016 г..
 */
class TraningCourse {
    constructor(title, trainer) {
        this.title = title;
        this.trainer = trainer;
        this.topics = [];
    }

    addTopic(title, date) {
        this.topics.push({title: title, date: date})
        this.topics.sort((a, b)=>a.date - b.date);
        return this;
    }

    get firstTopic() {
        return this.topics[0]
    }

    get lastTopic() {
        return this.topics[this.topics.length - 1];
    }

    toString() {
        let str = `Course "${this.title}" by ${trainer}\n`;
        for (let topic of this.topics) {
            str += `\n * ${topic.title} - ${topic.date}`
        }
        if(this.topics.length===0){
            str+='\n';
        }
        return str;
    }
}