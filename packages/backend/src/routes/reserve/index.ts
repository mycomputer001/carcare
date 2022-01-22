import { FastifyInstance, FastifyPluginOptions } from 'fastify'

interface ReserveBody {
  brand: string
  model: string
  license: string
  phone: string
  service: string
  date: string

}

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: ReserveBody }>('/', async (request) => {
    try {
      await instance.pg.query(
        'insert into reserve (reserve_brand, reserve_model, reserve_license, reserve_phone, reserve_service, reserve_date) values ($1, $2, $3, $4, $5, $6)',
        [request.body.brand, request.body.model, request.body.license, request.body.phone, request.body.service, request.body.date]
      )
    } catch (error) {
      throw new Error(error as string)
    }

    return {
      message: 'reserve successful'
    }
  })
}
