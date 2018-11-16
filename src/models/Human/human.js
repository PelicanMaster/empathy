export const SEX = {
    ASEXUAL: 0,
    MALE: 1,
    FEMALE: 2,
    ANDROGYNOUS: 3,
    UNKNOWN: 99
};

export class Human {
    constructor(sex = SEX.UNKNOWN) {
        this.sex = sex
    }

    eat(food) {
        return "Human eats " + food;
    }

    say(sentence) {
        return "Human growls " + sentence;
    }

}
