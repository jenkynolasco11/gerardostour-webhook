import Koa from 'koa'
import logger from 'koa-logger'
import bodyparser from 'koa-body'
import mongoose from 'mongoose'
import bluebird from 'bluebird'

import config from './config'
import routes from './src/api'

// Assign better Promise to global/mongoose
global.Promise = bluebird.Promise
mongoose.Promise = bluebird.Promise

const server = async () => {
  try {
    await mongoose.connect(config.DBURI, { useMongoClient : true })

    const app = new Koa()

    app
      .use(bodyparser({ multipart : true }))
      .use(routes)
      .use((ctx, next) => {
        // Safeguard!!!
        console.log('Where you going, duffo? (app.js)')
        console.log('If this works, 404 is not working properly...')
        // Everything needs authentication!!!
        ctx.status = 404
        return ctx.body = { message : 'This route doesn\'t exist. Try with another one' }
      })

    const PORT = (process.env.PORT || config.PORT)

    await app.listen(PORT)

    console.log(`Started server at ${ PORT }`)
  } catch (e) {
    console.log(e)
    process.exit()
  }
}

server()