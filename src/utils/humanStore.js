import Human from '../models/human'

class HumanStore {
    constructor () {
        this.store = {};
    }

    get (id) {
        let item = this.store[id];

        if (!item) {
            item = this.store[id] = new Human();
        }

        return item;
    }

    set (id, value) {
        this.store[id] = value;
    }
}

export default new HumanStore();
