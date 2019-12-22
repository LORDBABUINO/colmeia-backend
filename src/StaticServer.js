import 'dotenv/config'
import express from 'express'
import path from 'path'

class StaticServer {
  constructor() {
    this.server = express()

    this.middlewares()
    this.exceptionhandler()
  }

  middlewares() {
    this.server.use(
      // express.static(path.resolve(__dirname, process.env.FRONTEND_BUILD))
      express.static(path.resolve(__dirname, '/home/static'))
    )
  }

  exceptionhandler() {
    this.server.use(async (error, req, res, next) => {
      return res.status(500).json({ error: 'internal server error' })
    })
  }
}

export default new StaticServer().server
