import express from 'express'

/**
 * PARAMS-IS-NOT-NAN
 * @param keys {string[]}
 * @return {express.Handler}
 */
export default function (...keys: string[]): express.Handler {
  if (Array.isArray(keys[0])) {
    keys = keys[0]
  }

  return (req: express.Request, res: express.Response, next: express.NextFunction) => {
    for (const key of keys) {
      if (isNaN(+req.params[key])) {
        const status = 400

        return res.status(status).json({
          status,
          message: `Parameter "${key}" cannot be NaN`
        })
      }
    }

    next()
  }
}
