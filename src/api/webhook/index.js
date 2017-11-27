import Router from 'koa-router'
import axios from 'axios'

const webhook = new Router({ prefix : 'webhook'})

const WEBHOOK_URL = 'https://hooks.zapier.com/hooks/catch/1160582/szth43/'

webhook.post('/', async ctx => {
  const { body } = ctx.request

  const res = await axios.post(WEBHOOK_URL, body)
})

export default webhook