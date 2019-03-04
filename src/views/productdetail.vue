<template>

<div>

<div class="card" style="max-width: 940px; border: none;">
     <div class="row no-gutters">
         <div class="col-auto">
             <img :src="getPic()"  width="550" height="450"  class="img-fluid" alt="">
         </div>
         <div class="col">
             <div class="card-block px-2">
                 <h4 class="card-title">{{productName}}</h4>
                  <p class="card-text" style="font-size: 12pt;font-weight:700;color:#ff5722;">{{ productPrice }}</p>
                 <p class="card-text">{{productDescription}}</p>
             </div>
         </div>
     </div>
 </div>
</div>
</div>

</template>
<script>
 import SETTING from "../setting.js";
 export default{
  name:'details',
  data(){
   return{
      title:"details",
      productName:this.$route.params.Pid.productName,
      productDescription:this.$route.params.Pid.productDesc,
      productPrice: "Rp."+this.$route.params.Pid.productPrice,
      productImage: this.globalVar+"/product/image/"+this.$route.params.Pid.productId
   }
  },

  methods:{
    getPic() {
         return this.globalVar+"/product/image/"+this.$route.params.Pid.productId;
       }

    }

 }
</script>
