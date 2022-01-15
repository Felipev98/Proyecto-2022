import { createStore } from 'vuex'

export default createStore({
  state: {
    access:'',
    refresh:'',
    Developer: false,
    Business:false,
  },
  mutations: {
    initializeStore(state){
      if(localStorage.getItem('access')){
        state.access = localStorage.getItem('access')
      }else{
        state.access = ''
      }
    },
    initializeState(state){
      if(localStorage.getItem('Business')){
        state.Developer = localStorage.getItem('Developer')
        state.Business = localStorage.getItem('Business')
        state.Developer = true
        state.Business = true
      }else{
        state.access = ''
      }
    },
    setAcess(state, access){
      state.access = access
    },
    setRefresh(state,refresh){
      state.refresh = refresh
    },
    setDeveloper(state, Developer){
      state.Developer = Developer
    },
    setBusiness(state, Business){
      state.Business = Business
    }
  },
  actions: {
  },
  modules: {
  }
})
