import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { EmployeeBody } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: EmployeeBody }>('/', async (request) => {
    try {
      await instance.pg.query(
        'insert into employee (employee_name, employee_surename, employee_phone_number, employee_birthdate, employee_salary, employee_address) values ($1, $2, $3, $4, $5, $6)',
        [request.body.name, request.body.surname, request.body.phoneNumber, request.body.birthdate, request.body.salary, request.body.address]
      )
    } catch (error) {
      throw new Error(error as string)
    }
    return {
      message: 'employee route'
    }
  })

  instance.get<{ Body: EmployeeBody }>('/', async (request) => {
    console.log(request.body)
    try {
      await instance.pg.query(
        'insert into employee (employee_name, employee_surename, employee_phone_number, employee_birthdate, employee_salary, employee_address) values ($1, $2, $3, $4, $5, $6)',
        [request.body.name, request.body.surname, request.body.phoneNumber, request.body.birthdate, request.body.salary, request.body.address]
      )
    } catch (error) {
      throw new Error(error as string)
    }
    return {
      message: 'employee route'
    }
  })
}
