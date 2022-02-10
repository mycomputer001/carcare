import dayjs from 'dayjs'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { ReserveBody, reserves } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: ReserveBody }>(
    '/',
    {
      preValidation: async (request, reply) => {
        const { brand, model, license, phone, service, date } = request.body

        if (brand == null || brand === '') {
          void reply.code(400)
          throw new Error('body should have required property \'brand\'')
        }

        if (model == null || model === '') {
          void reply.code(400)
          throw new Error('body should have required property \'model\'')
        }

        if (license == null || license === '') {
          void reply.code(400)
          throw new Error('body should have required property \'license\'')
        }

        if (phone == null || phone === '') {
          void reply.code(400)
          throw new Error('body should have required property \'phone\'')
        }

        if (!dayjs(date).isValid()) {
          void reply.code(400)
          throw new Error('invalid \'date\' format')
        }

        if (service == null || service === '') {
          void reply.code(400)
          throw new Error('body should have required property \'service\'')
        }
      }
    },
    async (request) => {
      try {
        type InsertReserve = [
          reserves['reserve_brand'],
          reserves['reserve_model'],
          reserves['reserve_license'],
          reserves['reserve_service'],
          reserves['reserve_date'],
          reserves['reserve_phone_number']
        ]
        await instance.pg.query<reserves, InsertReserve>(
          'insert into reserves (reserve_brand, reserve_model, reserve_license, reserve_service, reserve_date, reserve_phone_number) values ($1, $2, $3, $4, $5, $6)',
          [request.body.brand, request.body.model, request.body.license, request.body.service, request.body.date, request.body.phone]
        )
      } catch (error) {
        throw new Error(error as string)
      }

      return {
        message: 'reserve route'
      }
    }
  )

  instance.get('/', async () => {
    const reserves = await instance.pg.query<reserves>(
      'select * from reserves'
    ).catch(error => {
      throw new Error(error as string)
    })

    return reserves.rows
  })
}
