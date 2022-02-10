import dayjs from 'dayjs'
import { FastifyInstance, FastifyPluginOptions } from 'fastify'

import { EmployeeBody, employees } from '@carcare/common'

export default async (instance: FastifyInstance, _: FastifyPluginOptions): Promise<void> => {
  instance.post<{ Body: EmployeeBody }>(
    '/',
    {
      preValidation: async (request, reply) => {
        const { name, surname, phoneNumber, birthdate, salary, address } = request.body

        if (name == null || name === '') {
          void reply.code(400)
          throw new Error('body should have required property \'name\'')
        }

        if (surname == null || surname === '') {
          void reply.code(400)
          throw new Error('body should have required property \'surname\'')
        }

        if (phoneNumber == null || phoneNumber === '') {
          void reply.code(400)
          throw new Error('body should have required property \'phoneNumber\'')
        }

        if (birthdate == null || birthdate === '') {
          void reply.code(400)
          throw new Error('body should have required property \'birthdate\'')
        }

        if (!dayjs(birthdate).isValid()) {
          void reply.code(400)
          throw new Error('invalid \'birthdate\' format')
        }

        if (salary == null) {
          void reply.code(400)
          throw new Error('body should have required property \'salary\'')
        }

        if (address == null || address === '') {
          void reply.code(400)
          throw new Error('body should have required property \'address\'')
        }
      }
    },
    async (request) => {
      try {
        await instance.pg.query<employees, [employees['employee_name'], employees['employee_surname'], employees['employee_phone_number'], employees['employee_birthdate'], employees['employee_salary'], employees['employee_address']]>(
          'insert into employees (employee_name, employee_surname, employee_phone_number, employee_birthdate, employee_salary, employee_address) values ($1, $2, $3, $4, $5, $6)',
          [request.body.name, request.body.surname, request.body.phoneNumber, request.body.birthdate, request.body.salary, request.body.address]
        )
      } catch (error) {
        throw new Error(error as string)
      }

      return {
        message: 'employee route'
      }
    }
  )

  instance.get('/', async () => {
    const employees = await instance.pg.query<employees>(
      'select * from employees'
    ).catch(error => {
      throw new Error(error as string)
    })

    return employees.rows
  })

  instance.delete<{ Querystring: { employeeId: string } }>('/', async (request) => {
    const { employeeId } = request.query

    await instance.pg.query(
      'delete from "employees" where employee_id = $1',
      [employeeId]
    )

    return {
      message: 'delete employee complete'
    }
  })
}
