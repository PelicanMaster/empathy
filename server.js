import express from 'express'
import bodyParser from 'body-parser'
import path from 'path'
import fs from 'fs'
import { execSync } from 'child_process'

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

app.get('/fibonacci/:nth', (req, res) => {
    let execPath = path.join(__dirname, '.obj', 'fibonacci');

    if (!fs.existsSync(execPath)) {
        res.sendStatus(500);
        throw new Error('Unable to find executable :(');
    }

    if (isNaN(req.params.nth) || req.params.nth > 45 || req.params.nth < 0) {
        res.sendStatus(400);
        throw new Error('IllegalArgumentException');
    }

    let output = execSync(`${execPath} ${req.params.nth}`);
    output = output.toString().replace(/\n/g, '<br />');

    res.send(output);
});

app.get('*', (req, res) => {
    res.send('Hello, world.');
});

app.listen(port);
console.log(`[${new Date()}] Server started.`);
