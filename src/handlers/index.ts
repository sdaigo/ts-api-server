import { RequestHandler } from 'restify'

export const respond: RequestHandler = (_req, res, next) => {
  res.send({
    message: 'hello world',
  })
  next()
}
