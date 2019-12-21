import 'dotenv/config'
import app from './app'
import staticServer from './StaticServer'

app.listen(process.env.BACKEND_PORT)
if (process.env.NODE_ENV === 'production')
  staticServer.listen(process.env.FRONTEND_PORT)
