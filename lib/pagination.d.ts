import express from 'express';
import { IResult } from '../interfaces/pagination';
/**
 * PAGINATION
 * @param req {express.Request}
 * @param res {express.Response}
 * @param next {express.NextFunction}
 */
export default function (req: express.Request, res: express.Response, next: express.NextFunction): void;
declare global {
    namespace Express {
        interface Request {
            pagination(): IResult;
        }
    }
}
