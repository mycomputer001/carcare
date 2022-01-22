import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import loginRoute from './login'
import registerRoute from './register'
import reserveRoute from './reserve'
import usersRoute from './users'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.all('/', async () => {
    return {
      hello: 'world'
    }
  })

  void instance.register(usersRoute, { prefix: '/users' })
  void instance.register(registerRoute, { prefix: '/register' })
  void instance.register(loginRoute, { prefix: '/login' })
  void instance.register(reserveRoute, { prefix: '/reserve' })
}
