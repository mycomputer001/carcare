import dotenv from 'dotenv-flow'
import fastify, { FastifyInstance } from 'fastify'
import cors from 'fastify-cors'
import helmet from 'fastify-helmet'
import pg from 'fastify-postgres'
import { IncomingMessage, Server, ServerResponse } from 'http'
import { resolve } from 'node:path'
import { Logger } from 'pino'

import routes from './routes'

dotenv.config({
  path: resolve(__dirname, '..')
})

const instance = (): FastifyInstance<Server, IncomingMessage, ServerResponse, Logger> => {
  const app = fastify<Server, IncomingMessage, ServerResponse, Logger>({
    logger: {
      prettyPrint: {
        colorize: true,
        translateTime: 'SYS:standard'
      }
    }
  })

  const port = process.env.FASTIFY_PORT
  const pgUsername = process.env.POSTGRES_USERNAME
  const pgPassword = process.env.POSTGRES_PASSWORD
  const pgHostname = process.env.POSTGRES_HOSTNAME
  const pgPort = process.env.POSTGRES_PORT
  const pgDBName = process.env.POSTGRES_DBNAME

  if (
    pgUsername == null || pgUsername === '' ||
    pgPassword == null || pgPassword === '' ||
    pgHostname == null || pgHostname === '' ||
    pgPort == null || pgPort === '' ||
    pgDBName == null || pgDBName === ''
  ) {
    throw new Error('missing postgres credentials')
  }

  if (port == null || port === '' || isNaN(Number(port))) {
    throw new Error('missing fastify port')
  }

  void app.register(pg, {
    connectionString: `postgres://${pgUsername}:${encodeURIComponent(pgPassword)}@${pgHostname}:${pgPort}/${pgDBName}`
  })
  void app.register(cors)
  void app.register(helmet)
  void app.register(routes)

  return app
}

export default instance
