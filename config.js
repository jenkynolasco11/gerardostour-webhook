const user = 'database'
const pass = 'database'

export const PORT = process.env.PORT ? process.env.PORT : 8000
export const DBURI = `mongodb://${ user }:${ pass }@ds115436.mlab.com:15436/gerardostours`

export default {
  PORT,
  DBURI,
}