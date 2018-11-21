import Human from "../models/human";
import store from "../utils/humanStore";

export function setHumanName(req, res) {
    let { name } = req.params;

    if (typeof name !== "string") {
        res.sendStatus(400);
        throw new Error("Please provide name to Human.");
    }

    let human = store.get(req.session.id);
    human.name = name;

    res.send(human.say(" his name"));
}

export function humanEat(req, res) {
    let { food } = req.params;

    if (typeof food !== "string") {
        res.sendStatus(400);
        throw new Error("Please provide food to Human.");
    }

    let human = store.get(req.session.id);
    res.send(human.eat(food));
}

export function humanSay(req, res) {
    let { sentence } = req.params;

    if (typeof sentence !== "string") {
        res.sendStatus(400);
        throw new Error("Please provide something to say to Human.");
    }

    let human = store.get(req.session.id);
    res.send(human.say(sentence));
}

export function humanListen(req, res) {
    let { sound } = req.params;

    if (typeof sound !== "string") {
        res.sendStatus(400);
        throw new Error("Please provide something to listen to Human.");
    }

    let human = store.get(req.session.id);
    res.send(human.listen(sound));
}
