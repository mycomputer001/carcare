import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import usersRoute from './users'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.all('/', async () => {
    return {
      hello: 'world'
    }
  })

  void instance.register(usersRoute, { prefix: '/users' })
}
