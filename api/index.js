import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { listById } from './listById.js';

const DEFAULT_PORT = 8080

const app = express();
const port = DEFAULT_PORT;

app.use(bodyParser.json());
app.use(cors());


app.route('/api/:id')

    .get((req, res) => {
        return listById[req.params.id] !== undefined ? res.json(listById[req.params.id]) : res.status(404).send('Not found ID');
    })

    .post((req, res) => {
        const id = req.params.id;
        const items = req.body;
        listById[id] = items;

        return res.json(listById[id]);
    });

app.listen({ port })
console.log(`Started listening on port: ${port}`)
