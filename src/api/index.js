import Router from 'koa-router'

import webhook from './webhook'

const api = new Router({ prefix : 'api/v1'})
const root = new Router()

api.use('/', webhook.routes(), webhook.allowedMethods())

root.use('/', api.routes(), api.allowedMethods())

root.get('/', ctx => {
  return ctx.redirect('/api/v1/webhook')
})

root.stack.forEach(e => console.log(e.path))

export default root.routes()