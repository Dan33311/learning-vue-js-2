new Vue({
  el: '#vue-app',
  data: {
    name: "Daniel",
    job: "Ninja"
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.name;
    }
  }
})
