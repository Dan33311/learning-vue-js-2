new Vue({
  el: '#vue-app',
  data: {
    age: 25,
    x: 0,
    y: 0,
  },
  methods: {
    add: function(years){
      this.age += years;
    },
    subtract: function(years){
      this.age -= years;
    },
    updateXY: function(event){
      this.x = event.offsetX;
      this.y = event.offsetY;
    }
  }
})
