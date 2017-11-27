<template>
    <div class="employees-list">

      <div class="row mb-3 item" v-for="(item, index) in employees">
        <div class="col-md-3">
          {{item.name}}
        </div>
        <div class="col-md-3">
          {{item.age}}
        </div>
        <div class="col-md-3">
          {{item.phone}}
        </div>
        <div class="col-md-3">
          <a href="#" @click.prevent="deleteEmployee(item, index)" class="btn btn-danger btn-block">Удалить</a>
        </div>
      </div>

      <p v-if="!employees.length">
        Нет сотрудников
      </p>

    </div>
</template>

<script>
    export default {
        name: 'employees-list',
        props: {
          newEmployee: {
            type: Object
          }
        },
        data() {
            return {
                employees: []
            }
        },
        watch: {
            newEmployee (employee) {
              this.employees.push(employee)
            }
        },
        methods: {
          deleteEmployee (employee, index) {
            this.$emit('deleteEmployee', employee)
            this.employees.splice(index, 1);
          }
        }
    }
</script>
