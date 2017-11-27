import Router from 'koa-router'

import webhook from './webhook'

const api = new Router({ prefix : '/api/v1'})

api.use('/', webhook.routes(), webhook.allowedMethods())

api.stack.forEach(e => console.log(e.path))

export default api.routes()