import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { RateBody, rates } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: RateBody }>(
    '/',
    {
      preValidation: async (request, reply) => {
        const { points } = request.body

        if (points === null || points === '') {
          void reply.code(400)
          throw new Error('body should have required property \'points\'')
        }
      }
    },
    async (request) => {
      try {
        type InsertRates = [
          rates['rate_points']
        ]
        await instance.pg.query<rates, InsertRates>(
          'insert into rates (rate_points) values ($1)',
          [request.body.points]
        )
      } catch (error) {
        throw new Error(error as string)
      }

      return {
        message: 'rate route'
      }
    }
  )

  instance.get('/', async () => {
    const rates = await instance.pg.query<rates>(
      'select * from rates'
    ).catch(error => {
      throw new Error(error as string)
    })

    return rates.rows
  })
}
