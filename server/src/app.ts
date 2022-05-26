import express from 'express';
import config from 'config';
import bodyParser from 'body-parser';
import routes from './routes';
import db from './db';

const app = express();

const port = config.get(`port`);

app.use(bodyParser.json());

app.listen(4000, () => {
    console.log(`Application is listening at http://localhost:${port}`);
    db();
    routes(app);
});
