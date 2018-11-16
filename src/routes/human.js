import { isString, isUndefined } from "util";
import { Human } from "../models/Human/human";

export function humanEat(req, res) {
    if ( isUndefined(req.params.food) || !isString(req.params.food)) {
        res.sendStatus(400);
        throw new Error('Please provide food to Human.');
    }

    res.send(new Human().eat(req.params.food));
}

export function humanSay(req, res) {
    if ( isUndefined(req.params.sentence) || !isString(req.params.sentence)) {
        res.sendStatus(400);
        throw new Error('Please provide something to say to Human.');
    }

    res.send(new Human().say(req.params.sentence));
}
