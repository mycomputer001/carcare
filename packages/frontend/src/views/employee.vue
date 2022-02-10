<template>
  <sidebarceo />
  <div class="min-h-screen w-full">
    <div class="flex flex-col items-center">
      <div class="ring-black ring-2 rounded-lg w-min mt-5 p-3">
        <div class="flex justify-center">
          เพิ่มพนักงาน
        </div>
        <div class="flex justify-center gap-5">
          <input type="text" placeholder="ชื่อพนักงาน" class="ring-black ring-2 w-28 rounded ml-3" v-model="name">
          <input type="text" placeholder="นามสกุล" class="ring-black ring-2 w-28 rounded ml-3" v-model="surname">
          <input type="text" placeholder="เบอร์โทรศัพท์" class="ring-black ring-2 w-28 rounded ml-3" v-model="phoneNumber">
          <input type="date" placeholder="อายุ" class="ring-black ring-2 w-36 rounded ml-3" v-model="birthdate">
          <input type="text" placeholder="เงินเดือน" class="ring-black ring-2 w-28 rounded ml-3" v-model="salary">
        </div>
        <div class="flex justify-center">
          <textarea placeholder="ที่อยู่" class="ring-black ring-2 w-56 h-32 rounded ml-3 col-span-5 mt-5 " v-model="address" />
        </div>
        <div class="col-span-5 flex justify-center mt-5">
          <button class="ring-black ring-2 w-28 rounded bg-white shadow-black shadow-inner hover:bg-side" @click="employeeUser">
            เพิ่มพนักงาน
          </button>
        </div>
      </div>
      <div class="text-2xl flex flex-col items-center mt-4">
        <div class="grid grid-cols-6 text-center border-2">
          <div>ชื่อ</div>
          <div>นามสกุล</div>
          <div>เบอร์โทรศัพท์</div>
          <div>วันเกิด</div>
          <div>เงินเดือน</div>
          <div />
          <template v-for="(employee,i) of employeesList" :key="employee.employee_id">
            <div class="">
              {{ employee.employee_name }}
            </div>
            <div class="">
              {{ employee.employee_surname }}
            </div>
            <div class="">
              {{ employee.employee_phone_number }}
            </div>
            <div class="">
              {{ employee.employee_birthdate }}
            </div>
            <div class="">
              {{ employee.employee_salary }}
            </div>
            <button @click="deleteEmployee(i)">
              ลบ
            </button>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

import dayjs from 'dayjs'
import ky from 'ky'
import { defineComponent, onMounted, Ref, ref } from 'vue'
import { useRouter } from 'vue-router'

import { EmployeeBody, employees } from '@carcare/common'

import Sidebarceo from '../components/sidebarceo.vue'

import 'dayjs/locale/th'

export default defineComponent({
  name: 'employee',
  components: { Sidebarceo },
  setup () {
    const router = useRouter()

    const name = ref('')
    const surname = ref('')
    const phoneNumber = ref('')
    const birthdate = ref('')
    const salary = ref('')
    const address = ref('')
    const employeesList: Ref<Array<employees>> = ref([])

    const deleteEmployee = async (index: number): Promise<void> => {
      try {
        await ky.delete('http://localhost:4000/employees', {
          searchParams: {
            employeeId: employeesList.value[index].employee_id
          }
        })

        router.go(0)
        alert('delete employee done')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    const employeeUser = async (): Promise<void> => {
      if (salary.value === '' || Number(salary.value) <= 0) {
        alert('เงินเดือนมีความผิดพลาด')
        return
      }

      try {
        const employeeData: EmployeeBody = {
          name: name.value,
          surname: surname.value,
          phoneNumber: phoneNumber.value,
          birthdate: birthdate.value,
          salary: Number(salary.value),
          address: address.value
        }

        await ky.post('http://localhost:4000/employees', {
          json: employeeData
        })

        router.go(0)
        alert('post employee done')
      } catch (error) {
        // @ts-expect-error error is unknown
        const json = await error.response.json()
        alert(json.message)
      }
    }

    onMounted(async () => {
      const employees = await ky.get('http://localhost:4000/employees').json<Array<employees>>()
      employeesList.value = [...employeesList.value, ...employees].map(employee => {
        const ret: employees = {
          employee_id: employee.employee_id,
          employee_name: employee.employee_name,
          employee_surname: employee.employee_surname,
          employee_phone_number: employee.employee_phone_number,
          employee_birthdate: dayjs(employee.employee_birthdate).locale('th').format('D MMMM YYYY'),
          employee_salary: employee.employee_salary,
          employee_address: employee.employee_address
        }

        return ret
      })
    })

    return {
      name,
      surname,
      phoneNumber,
      birthdate,
      salary,
      address,
      employeeUser,
      employeesList,
      deleteEmployee
    }
  }
})
</script>
