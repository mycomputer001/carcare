import { exit } from 'node:process'

import instance from './app'

const server = instance()

server.listen(4000, (error, _) => {
  if (error != null) {
    server.log.error(error)
    exit(1)
  }
})
