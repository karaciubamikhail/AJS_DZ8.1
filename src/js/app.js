export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(character) {
        if(this.members.has(character)) {
            throw new Error('Character was already added!');
        }
        this.members.add(character);
    }

    addAll(...characters) {
        for(let value of characters) {
            this.members.add(value);
        }
    }
    toArray() {
        return Array.from(this.members)
    }
}