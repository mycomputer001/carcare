import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import registerRoute from './customers'
import employeeRoute from './employees'
import loginRoute from './login'
import profileRoute from './profile'
import rateRoute from './rates'
import reserveRoute from './reserves'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.all('/', async () => {
    return {
      hello: 'world'
    }
  })

  void instance.register(registerRoute, { prefix: '/customers' })
  void instance.register(loginRoute, { prefix: '/login' })
  void instance.register(reserveRoute, { prefix: '/reserves' })
  void instance.register(employeeRoute, { prefix: '/employees' })
  void instance.register(profileRoute, { prefix: '/profile' })
  void instance.register(rateRoute, { prefix: '/rates' })
}
