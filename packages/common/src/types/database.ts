export interface customers {
  customer_id: string
  customer_username: string
  customer_password: string
  customer_name: string
  customer_surname: string
  customer_phone_number: string
  customer_email: string
}

export interface reserves {
  reserve_id: number
  reserve_brand: string
  reserve_model: string
  reserve_license: string
  reserve_phone_number: string
  reserve_service: string
  reserve_date: string | null
}

export interface employees {
  employee_id: number
  employee_name: string
  employee_surname: string
  employee_phone_number: string
  employee_birthdate: string
  employee_salary: number
  employee_address: string
}
