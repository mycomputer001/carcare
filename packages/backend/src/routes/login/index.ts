import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { LoginBody } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: LoginBody }>('/', async (request) => {
    const users = await instance.pg.query(
      'select (customer_username, customer_password) from register where customer_username = $1 and customer_password = $2',
      [request.body.username, request.body.password]
    ).catch(error => {
      throw new Error(error as string)
    })

    if (users.rowCount === 0) {
      throw new Error('invalid \'username\' or \'password\'')
    }

    return {
      message: 'Login successful'
    }
  })
}
