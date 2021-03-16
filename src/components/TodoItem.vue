<template>
    

        <q-item
        @click="updateTodo({id:id,update:{completed:!todo.completed}})"
        clickable
        :class="!todo.completed ? 'bg-orange-1':'bg-green-1'"
        v-ripple>
      <q-item-section side top>
        <q-checkbox :value="todo.completed"></q-checkbox>

      </q-item-section>
      <q-item-label 
      :class="{'text-strike-through':todo.completed}"
      >
        {{todo.name}} {{todo.duedate}} 
      </q-item-label>
      </q-item-section>
      <q-space/>
      <q-item-section side>
        <div class="row">
            <q-btn
            @click.stop="showtodoeditmodal=true"
            flat
            round
            color="primary"
            icon="edit"
            
            />
            <q-btn
            @click.stop="promptToDelete(id)"
            flat
            round
            color="red"
            icon="delete"
            
            /> 
      </div>

      </q-item-section>

    <q-dialog v-model="showtodoeditmodal">

    <EditTodo
    :todo="todo"
    :id="id"
    @closeaddtodo="showtodoeditmodal= ! showtodoeditmodal"
    />

  </q-dialog>

      </q-item>


</template>


<script>
import { mapActions } from "vuex"
 
export default {
    name:"TodoItem",
    props:['todo','id'],
    data(){
      return{

        showtodoeditmodal : false

      }
    },
    methods:{
      ...mapActions('todosStore',['updateTodo','deleteTodo']),
      promptToDelete(id){
        this.$q.dialog({
        title: 'Confirm',
        message: 'Would you like to Delete',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTodo({id:id})
      }).onCancel(() => {
        console.log('>>>> Cancel')
      })
      },
      
    }, 
    components:{
      'EditTodo':require('components/modals/EditTodo.vue').default
    }
    
}
</script>

<style scoped>
.text-strike-through{
  text-decoration: line-through;

}
</style>