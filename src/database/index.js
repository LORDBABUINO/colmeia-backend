import 'dotenv/config'
import Parse from 'parse/node'

class Database {
  constructor() {
    this.init()
  }

  async init() {
    Parse.serverURL = process.env.SERVER_URL
    Parse.initialize(process.env.APP_ID, process.env.JAVASCRIPT_KEY)
  }
}

export default new Database()
