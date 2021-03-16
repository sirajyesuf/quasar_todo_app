import Vue from "vue"
import { uid } from 'quasar'
const state = {

    todos : [
          {
            id:1,
            name:'laravel 8',
            duedate:"12/12/12",
            completed:false
    
          },
          {
            id:2,
            name:'django 3',
            duedate:"12/12/12",
            completed:false
    
          },
          {
            id:3,
            name:'vuejs 3',
            duedate:"12/12/12",
            completed:false
    
          }
    ]
    
}

const mutations = {

  updateTodo(state,payload){
    console.log("payload from mutation:",payload)
    // Object.assign(
    let todo =   state.todos.find(todo=>todo.id == payload.id)
    console.log(todo)

    Object.assign(todo,payload.update)

  },
  deleteTodo(state,payload){
    console.log(payload)
    let todo = state.todos.find(todo =>todo.id == payload.id)
    console.log(todo)
    state.todos.splice(state.todos.indexOf(todo),1)
    Vue.delete(state.todos,todo)



  },
  addTodo(state,payload){
    
    payload['id'] = uid()
    state.todos.push(payload)
  }


}

const actions = {

  updateTodo({commit},payload){

    console.log(payload)
    
    commit('updateTodo',payload)

  },
  deleteTodo({commit},payload){
    commit('deleteTodo',payload)
  },
  addTodo({commit},payload){
    commit('addTodo',payload)
  }


}

const getters = {
    completedtodos(state){
        return state.todos.filter((todo)=>todo.completed)
    },
    uncompletedtodos(state){
      return state.todos.filter((todo)=> !todo.completed)
  }

}


export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}