import express from 'express'
import bodyParser from 'body-parser'
import session from 'express-session'
import { setHumanName, humanEat, humanSay } from './routes/human'
import store from './utils/humanStore'

const PORT = process.env.PORT || 8080,
      SESSION_SECRET = process.env.SESSION_SECRET || 'c02b7d24a066adb747fdeb12deb21bfa',
      app = express();

app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: process.env.NODE_ENV === 'production'
    }
}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.get('/human/name/:name', setHumanName);
app.get('/human/eat/:food', humanEat);
app.get('/human/say/:sentence', humanSay);

app.get('*', (req, res) => {
    let human = store.get(req.session.id);

    if (human.name) {
        res.send(`Hello, my name is ${human.name}.`);
    } else {
        res.send('Hello, I have no name. You can set it here `/human/name/my_new_name`.');
    }
});

app.listen(PORT);
console.log(`[${new Date()}] Server started on :${PORT}.`);
