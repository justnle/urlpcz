import { Express, Request, Response } from 'express';
import {
    createShortUrl,
    handleRedirect
} from '../controller/shortUrl.controller';

function routes(app: Express) {
    app.get(`/healthcheck`, (req: Request, res: Response) => {
        return res.send(`App is healthy`);
    });

    app.post(`/api/url`, createShortUrl);

    app.get(`/:shortId`, handleRedirect);
}

export default routes;
