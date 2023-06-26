//app.ts
import express, { Express} from 'express'
import configExpress from './config/configExpress'
import * as dotenv from 'dotenv'
import routes from "./routes"
dotenv.config()

const app: Express = express()

const port = process.env.PORT || 8000
const MODE =  process.env.MODE || "production"

app.listen(port, () => {
  configExpress(app)
  //connect to db goes here
  routes(app)
  console.log(`✅ Server running on port ${port} on ${MODE} mode.`);
})
