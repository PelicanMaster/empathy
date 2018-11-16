import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'
import { humanEat, humanSay } from './routes/human';

const port = process.env.PORT || 8080,
      app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');

    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Hello, world.');
});

app.get('/human/eat/:food', humanEat);

app.get('/human/say/:sentence', humanSay);


app.listen(port);
console.log(`[${new Date()}] Server started.`);
