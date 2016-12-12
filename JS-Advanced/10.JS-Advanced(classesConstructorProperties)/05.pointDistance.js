/**
 * Created by MARK-Max on 1.11.2016 г..
 */
class Point {
    constructor(x,y){
        this.x=x;
        this.y = y;
    }
    static distance(a,b){
        let dx = a.x-b.x;
        let dy = a.y-b.y;
        return Math.sqrt(dx*dx+dy*dy);
    }
}