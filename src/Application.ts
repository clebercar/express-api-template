import 'dotenv/config'
import express, { Express } from 'express'

class Application {
  private express: Express

  constructor() {
    this.express = express()
  }

  server() {
    const port = process.env.PORT || 80

    this.express.listen(port, () =>
      console.info(`⚡ Server running on port ${port}`)
    )
  }
}

export default new Application()
