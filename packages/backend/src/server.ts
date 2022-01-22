import dotenv from 'dotenv-flow'
import { resolve } from 'node:path'
import { exit } from 'node:process'

import instance from './app'

dotenv.config({
  path: resolve(__dirname, '..')
})

const server = instance()

server.listen(Number(process.env.FASTIFY_PORT ?? 4000), (error, _) => {
  if (error != null) {
    server.log.error(error)
    exit(1)
  }
})
