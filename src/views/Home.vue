<template>
  <div>
      <div class="row">
         <div class="col-sm-3">
              <router-link to="/addnewproduct" class="btn btn-info" style="margin-bottom:20px;">Add New Product</router-link >
         </div>
      </div>
      <div class="row">
         <div class="col-sm-3" v-for="(item, index) in items">
         <div class="card mb-3 "  style="max-width: 20rem; ">
           <div> <img  class="card-img-top":src="getPic(index)" height="130rem"> </div>
           <div class="card-body">
             <h5 class="card-title" style="font-size:11pt;">{{ item.productName }}</h5>
             <p class="card-text" style="font-size: 12pt;font-weight:700;color:#ff5722;">Rp.{{ item.productPrice }}</p>
              <p class="card-text">
                <b-button  @click=" goTodetail(item)" variant="outline-primary" style="margin-right:10px;">Detail</b-button>
                <b-button  @click="editProduct(item)" variant="outline-secondary">Edit Product</b-button>
              </p>
           </div>
       </div>
       </div>
       </div>
  </div>
</template>
<script>
 import axios from "axios";
 import SETTING from "../setting.js";
  export default {
    data() {
      return {
        items: []
      }
    },

    created() {
           axios({ method: "POST", "url": this.globalVar+"/product/listproduct"}).then(result => {
               this.items = result.data.listProduct;
           }, error => {
               console.error(error);
           });
       },

       methods:{
         goTodetail(prodId) {
           let proId=prodId
           this.$router.push({name:'productdetail',params:{Pid:proId}})
         },

         editProduct(prodId) {
           let proId=prodId
           this.$router.push({name:'editproduct',params:{Pid:proId}})
         },

         getPic(index) {
              return this.globalVar+'/product/image/'+this.items[index].productId;
            }

         }
  }
</script>
