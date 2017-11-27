import Router from 'koa-router'

const webhook = new Router({ prefix : 'webhook'})

webhook.post('/', ctx => {
  const { body } = ctx.request
})

export default webhook