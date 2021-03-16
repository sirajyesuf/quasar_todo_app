<template>
	
      <q-card>
        <modal-header>
          Edit the todo
        </modal-header>
        <form @submit.stop = "formsubmit">
            <q-card-section class="q-pt-none">

              <modal-todo-name-input 
              :name.sync="newtodo.name"
              ref="modalnameinput"
              />

              <modal-todo-date-input
              :duedate.sync="newtodo.duedate"
              
              />
          </q-card-section>
          <modal-todo-action
          lable="savetodo"
          />

            </form>

      </q-card>

</template>

<script>
import {mapActions} from "vuex"
export default{

	name:"EditTodo",
    props:['todo','id'],
	data(){
		return {
			newtodo:{}
		}
	},
  methods:{
      ...mapActions('todosStore',['updateTodo']),
    formsubmit(){

      this.$refs.modalnameinput.$refs.name.validate()
      if(! this.$refs.modalnameinput.$refs.name.hasError){

        this.submitTodo()

      }

      
    },
    submitTodo(){

      let payload = {
        id:this.id,
        update:this.newtodo
      }

      this.updateTodo(payload)
      this.$emit('closeaddtodo')

      console.log("submit Todo")
    }
  },
  components:{

    'modal-header':require('components/modals/shared/ModalHeader.vue').default,
    'modal-todo-name-input':require('components/modals/shared/modalTodoNameInput.vue').default,
    'modal-todo-date-input':require('components/modals/shared/modalTodoDateInput.vue').default,
    'modal-todo-action':require('components/modals/shared/ModalTodoAction').default
  },
mounted(){

    this.newtodo = Object.assign({},this.todo)
    console.log(this.newtodo)
}

}

</script>
