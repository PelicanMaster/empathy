export const SEX = {
    ASEXUAL: 0,
    MALE: 1,
    FEMALE: 2,
    ANDROGYNOUS: 3,
    UNKNOWN: 99
};

const DEFAULT_NAME = "Human";

export default class Human {
    constructor(sex = SEX.UNKNOWN) {
        this.sex = sex;
        this.name = null;
    }

    eat(food) {
        return `${this.name || DEFAULT_NAME} eats ${food}`;
    }

    say(sentence) {
        return `${this.name || DEFAULT_NAME} growls ${sentence}`;
    }

    listen(sound) {
        return `${this.name ||
            DEFAULT_NAME} is listening to ${sound}, damn that feels right ...`;
    }
}
