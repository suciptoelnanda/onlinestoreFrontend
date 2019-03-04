import Vue from "vue";
Vue.mixin({
  data: function() {
    return {
      globalVar:'http://localhost:8080'
    }
  }
})
