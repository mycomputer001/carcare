import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.get('/', async () => {
    return {
      message: 'users route'
    }
  })

  instance.get('/count', async () => {
    const users = await instance.pg.query(
      'select * from "users"'
    )

    return {
      message: `there are ${users.rowCount}`
    }
  })
}
