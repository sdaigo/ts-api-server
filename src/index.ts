import restify from 'restify'

import { respond } from './handlers'

const server = restify.createServer({
  name: 'First Service',
})

server.get('/', respond)

server.listen(process.env.PORT || 4000, () => {
  console.log(`[${server.name}]: listening at ${server.url}`)
})
