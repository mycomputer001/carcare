import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { customers, ProfileBody } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.get('/', async () => {
    const customer = await instance.pg.query('select * from "customers" limit 1')
    return customer.rows
  })

  instance.patch<{ Body: ProfileBody }>('/', async (request) => {
    type UpdateCustomer = [
      customers['customer_id'],
      customers['customer_name'],
      customers['customer_surname'],
      customers['customer_email'],
      customers['customer_phone_number']
    ]
    await instance.pg.query<customers, UpdateCustomer>(
      'update customers set customer_name = $2, customer_surname = $3, customer_email = $4, customer_phone_number = $5 where customer_id = $1 ',
      [request.body.profileID, request.body.name, request.body.surname, request.body.email, request.body.phoneNumber]
    )
    return {
      message: 'profile route'
    }
  })
}
