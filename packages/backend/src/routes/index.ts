import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import usersRoute from './users'
import registerRoute from './register'
import loginRoute from './login'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.all('/', async () => {
    return {
      hello: 'world'
    }
  })

  void instance.register(usersRoute, { prefix: '/users' })
  void instance.register(registerRoute, { prefix: '/register' })
  void instance.register(loginRoute, { prefix: '/login' })
  
}
