import { FastifyInstance, FastifyPluginOptions } from 'fastify'

interface employeeBody {
  name: string
  surename: string
  phone: string
  age: string
  salary: string
  address: string
}

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: employeeBody }>('/', async (request) => {
    console.log(request.body)
    try {
      await instance.pg.query(
        'insert into employee (employee_name, employee_surename, employee_phone, employee_age, employee_salary, employee_address) values ($1, $2, $3, $4, $5, $6)',
        [request.body.name, request.body.surename, request.body.phone, request.body.age, request.body.salary, request.body.address]
      )
    } catch (error) {
      throw new Error(error as string)
    }
    return {
      message: 'employee route'
    }
  })
  instance.get<{ Body: employeeBody }>('/', async (request) => {
    console.log(request.body)
    try {
      await instance.pg.query(
        'insert into employee (employee_name, employee_surename, employee_phone, employee_age, employee_salary, employee_address) values ($1, $2, $3, $4, $5, $6)',
        [request.body.name, request.body.surename, request.body.phone, request.body.age, request.body.salary, request.body.address]
      )
    } catch (error) {
      throw new Error(error as string)
    }
    return {
      message: 'employee route'
    }
  })
}
