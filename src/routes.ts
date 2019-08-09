import express, { Request as IReq, Response as IRes } from 'express'

const routes = express.Router()

routes.get('/', (req: IReq, res: IRes) => {
  const result = {
    status: true,
    message: 'Hello, this is express typescript rest api simple'
  }
  res.json(result)
})

export default routes
