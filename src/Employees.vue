<template>
    <div class="employees">

        <form @submit.prevent="addEmployee()">
          <div class="row">
            <div class="col-md-3">
              <input type="text" class="form-control" v-model="employeeFormModel.name" required minlength=1 maxlength=100 placeholder="Имя">
            </div>
            <div class="col-md-3">
              <input type="number" class="form-control" v-model="employeeFormModel.age" required minlength=1 maxlength=100 placeholder="Возраст">
            </div>
            <div class="col-md-3">
              <input type="tel" class="form-control" v-model="employeeFormModel.phone" required minlength=1 maxlength=100 placeholder="Телефон">
            </div>
            <div class="col-md-3">
              <button type="submit" class="btn btn-primary btn-block">Добавить</button>
            </div>
          </div>
        </form>

        <hr>

        <employees-list :newEmployee="newEmployee" v-on:deleteEmployee="deleteEmployee"></employees-list>

        <p v-if="lastDeletedEmployee">
          Был удален {{lastDeletedEmployee.name}}, телефон {{lastDeletedEmployee.phone}}
        </p>

    </div>
</template>

<script>
    import EmployeesList from './components/EmployeesList'

    const employeeModel = () => {
      return {
        name: '',
        age: '',
        phone: ''
      }
    }

    export default {
        name: 'employees',
        title: 'Сотрудники',
        components: {
          EmployeesList
        },
        data() {
            return {
                newEmployee: null,
                lastDeletedEmployee: null,
                employeeFormModel: new employeeModel
            }
        },
        methods: {
            addEmployee () {
              this.newEmployee = this.employeeFormModel
              this.employeeFormModel = new employeeModel
            },
            deleteEmployee (employee) {
              this.lastDeletedEmployee = employee
            }
        }
    }
</script>
