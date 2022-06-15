import { AnyObjectSchema } from 'yup';
import { Request, Response, NextFunction } from 'express';

const validateResource =
    (resourceSchema: AnyObjectSchema) =>
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            await resourceSchema.validate({
                body: req.body,
                query: req.query,
                params: req.params
            });
            next();
        } catch (err) {
            if (err instanceof Error) {
                return res.status(400).send(err);
            } else {
                console.log(`Unexpected error`, err);
            }
        }
    };

export default validateResource;
