<template>
 
  <router-view/>
</template>

<script>
import axios from 'axios'
export default {
  beforeCreate() {
    this.$store.commit('initializeStore')
    this.$store.commit('initializeState')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },
}
</script>

<style>

</style>
