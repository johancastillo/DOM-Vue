const app = new Vue({
  el: '#app',
  data: {
    title: "Hola desde Vue"
  },
  methods: {
    accion(){
      alert(this.$refs.entrada.value)
    }
  }
});
