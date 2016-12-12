/**
 * Created by MARK-Max on 10.11.2016 г..
 */

class Record {
    constructor(temperature, humidity, presure, windSpeed) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = presure;
        this.windSpeed = windSpeed;
        this.id = Record.getId();
    }

    toString() {
        let str = '';
        str += `Reading ID: ${this.id}\n`;
        str += `Temperature: ${this.temperature}*C\n`;
        str += `Relative Humidity: ${this.humidity}%\n`;
        str += `Pressure: ${this.pressure}hpa\n`;
        str += `Wind Speed: ${this.windSpeed}m/s\n`;
        if (this.temperature < 20 && (this.pressure < 700 || this.presure > 900) && this.windSpeed > 25) {
            str += `Weather: Stormy`;
        } else {
            str += `Weather: Not stormy`;
        }
        return str;
    }

    static getId(){
        if(!Record.nextId){
            Record.nextId=0;
        }
            return Record.nextId++;
    }
}




let record1 = new Record(32, 66, 760, 12);
console.log(record1.toString());
let record2 = new Record(10, 40, 680, 30);
console.log(record2.toString());

