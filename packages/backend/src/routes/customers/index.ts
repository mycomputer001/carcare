import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { RegisterBody } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: RegisterBody }>('/', async (request) => {
    console.log(request.body)

    const users = await instance.pg.query(
      'select (customer_username) from customers where customer_username = $1',
      [request.body.username]
    )

    if (users.rowCount > 0) {
      throw new Error('\'username\' has already used')
    }

    try {
      await instance.pg.query(
        'insert into customers (customer_username, customer_name, customer_surname, customer_phone_number, customer_email, customer_password) values ($1, $2, $3, $4, $5, $6)',
        [request.body.username, request.body.firstName, request.body.lastName, request.body.telephoneNumber, request.body.email, request.body.password]
      )
    } catch (error) {
      throw new Error(error as string)
    }

    return {
      message: 'customers route'
    }
  })
}
