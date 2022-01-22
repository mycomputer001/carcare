import { FastifyInstance, FastifyPluginOptions } from 'fastify'

interface LoginBody {
  username: string
  password: string
}

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: LoginBody }>('/', async (request) => {
    try {
      const users = await instance.pg.query(
        'select (customer_username, customer_password) from register where customer_username = $1 and customer_password = $2',
        [request.body.username, request.body.password]
      )
      if (users.rowCount === 0){
        throw new Error("No have Username")
      }
    } catch (error) {
      throw new Error(error as string)
    }
    return {
      message: 'login route'
    }
  })
}
