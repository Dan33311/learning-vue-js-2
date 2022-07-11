new Vue({
  el: '#vue-app',
  data: {
    age: 20,
    a: 0,
    b: 0
  },
  methods: {
    // addToA: function(){
    //   console.log('addToA');
    //   return this.a + this.age
    // }, // cuando ejecuto una funcion ambos logs se imprimen
    // addToB: function(){
    //   console.log('addToB');
    //   return this.b + this.age
    // }
  },
  computed: {
    addToA: function(){
      console.log('addToA');
      return this.a + this.age
    }, // cuando ejecuto una funcion solo se imprime el log que ejecuto
    addToB: function(){
      console.log('addToB');
      return this.b + this.age
    }
  }
})
