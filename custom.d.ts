import { IResult } from './interfaces/pagination'

declare global {
  namespace Express {
    export interface Request {
      pagination(): IResult
    }
  }
}
