import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/addnewproduct",
      name: "addnewproduct",
      component: () =>
        import("./views/addnewproduct.vue")
    },
    {
      path: "/productdetail/:Pid",
      name: "productdetail",
      component: () =>
        import("./views/productdetail.vue")
    },
    {
      path: "/editproduct",
      name: "editproduct",
      component: () =>
        import("./views/editproduct.vue")
    },
  ]
});
