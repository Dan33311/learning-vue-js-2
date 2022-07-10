new Vue({
  el: '#vue-app',
  data: {
    name: "Daniel",
    job: "Ninja",
    website: "https://daniel-kofxv.com.co",
    websiteTag: '<a href="https://daniel-kofxv.com.co">Daniel site Tag</a>'
  },
  methods: {
    greet: function(time){
      return 'Good ' + time + ', ' + this.name;
    }
  }
})
