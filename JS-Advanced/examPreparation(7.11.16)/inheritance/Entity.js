/**
 * Created by MARK-Max on 9.11.2016 г..
 */
class Entity {
    constructor(name) {
        if (new.target === Entity) {
            throw new Error;
        }

        this.name = name;
    }
}

module.exports = Entity;