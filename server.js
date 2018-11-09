import express from 'express'
import bodyParser from 'body-parser'

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

app.get('/echo/:echo', (req, res) => {
    res.send(req.params.echo);
});

app.listen(port);
