new Vue({
  el: '#vue-app',
  data: {
    name: "Daniel",
    job: "Dev"
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.name;
    }
  }
})
