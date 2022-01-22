import { FastifyInstance, FastifyPluginOptions } from 'fastify'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.get('/', async () => {
    return {
      message: 'users route'
    }
  })
}
