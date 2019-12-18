import express from 'express'
import path from 'path'
import routes from './routes'

import './database'

class App {
  constructor() {
    this.server = express()

    this.middlewares()
    this.routes()
    this.exceptionHandler()
  }

  middlewares() {
    this.server.use(express.json())
    this.server.use(
      '/files',
      express.static(path.resolve(__dirname, '..', 'tmp', 'uploads'))
    )
  }

  routes() {
    this.server.use(routes)
  }

  exceptionHandler() {
    this.server.use(async (error, req, res, next) => {
      return res.status(500).json({ error: 'Internal server error' })
    })
  }
}

export default new App().server
