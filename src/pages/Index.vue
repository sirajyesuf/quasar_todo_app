<template>
<div>
  <q-page padding>
    <q-list bordered>
      <TodoItem
        v-for = "todo in uncompletedtodos"
        :key = "todo.id"
        :todo = "todo"
        :id = "todo.id"
      />
    
    </q-list>
  <div class="absolute-bottom text-center q-mb-lg">

    <q-btn
      @click = "showtodoaddform = true "
      round
      color="primary"
      size="24px"
      icon="add"
    />
  </div>
<h5>completed todos</h5>
  <q-list bordered>
      <TodoItem
        v-for = "todo in completedtodos"
        :key = "todo.id"
        :todo = "todo"
        :id = "todo.id"
      />
    
    </q-list>
  <div class="absolute-bottom text-center q-mb-lg">

    <q-btn
      @click = "showtodoaddform = true "
      round
      color="primary"
      size="24px"
      icon="add"
    />
  </div>


  </q-page>

  <q-dialog v-model="showtodoaddform">

    <AddTodo
    @closeaddtodo="showtodoaddform = !showtodoaddform"
    />

  </q-dialog>

</div>
</template>

<script>

import { mapGetters } from "vuex"
export default {

  name: 'PageIndex',
  data(){
    return {

      showtodoaddform : false



    }
  },

  computed:{
    ...mapGetters('todosStore',['completedtodos','uncompletedtodos'])
    
  },
  components:{
    'TodoItem':require('components/TodoItem.vue').default,

    'AddTodo':require('components/modals/addTodo.vue').default

  }
  

}
</script>

<style scoped>

</style>


