import 'dotenv/config'

export default (req, res, next) => {
  res.header(
    'Access-Control-Allow-Origin',
    `${process.env.FRONTEND_URL}:${process.env.FRONTEND_PORT}`
  )
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
}
