import { FastifyInstance, FastifyPluginOptions } from 'fastify'

interface RegisterBody {
  username: string
  firstName: string
  lastName: string
  email: string
  password: string
  telephoneNumber: string
}

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: RegisterBody }>('/', async (request) => {
    console.log(request.body)

    try {
      await instance.pg.query(
        'insert into register (customer_name, customer_surname, phone, email, customer_password) values ($1, $2, $3, $4, $5)',
        [request.body.firstName, request.body.lastName, request.body.telephoneNumber, request.body.email, request.body.password]
      )
    } catch (error) {
      throw new Error(error as string)
    }

    return {
      message: 'register route'
    }
  })
}
