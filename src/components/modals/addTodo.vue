<template>
	
      <q-card>
        <modal-header>
          add new todo
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
	name:"AddTodo",
	data(){
		return {
			newtodo:{

				name:"",
				duedate:"",
				duetime:""
			}
		}
	},
  methods:{
      ...mapActions('todosStore',['addTodo']),
    formsubmit(){

      this.$refs.modalnameinput.$refs.name.validate()
      if(! this.$refs.modalnameinput.$refs.name.hasError){

        this.submitTodo()

      }

      
    },
    submitTodo(){

      let payload = {

        name:this.newtodo.name,
        duedate:this.newtodo.duedate,
        completed:false,

      }

      this.addTodo(payload)
      this.$emit('closeaddtodo')

      console.log("submit Todo")
    }
  },
  components:{

    'modal-header':require('components/modals/shared/ModalHeader.vue').default,
    'modal-todo-name-input':require('components/modals/shared/modalTodoNameInput.vue').default,
    'modal-todo-date-input':require('components/modals/shared/modalTodoDateInput.vue').default,
    'modal-todo-action':require('components/modals/shared/ModalTodoAction').default
  }

}

</script>
    ModalHeader