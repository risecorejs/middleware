import express from 'express'

import { IResult } from '../interfaces/pagination'

/**
 * PAGINATION
 * @param req {express.Request}
 * @param res {express.Response}
 * @param next {express.NextFunction}
 * @return {void}
 */
export default function (req: express.Request, res: express.Response, next: express.NextFunction) {
  const page = +(<string>req.query.page) || 1
  const pageSize = +(<string>req.query.pageSize) || 25

  req.pagination = (): IResult => {
    return {
      offset: (page - 1) * pageSize,
      limit: pageSize
    }
  }

  next()
}
