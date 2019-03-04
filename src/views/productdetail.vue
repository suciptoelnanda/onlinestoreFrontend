<template>

<div>
  <b-card no-body class="overflow-hidden" style="max-width: 940px; border: none;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img src="http://localhost:8080/product/image/19" class="rounded-0" />
      </b-col>
      <b-col md="6">
        <b-card-body >
          <b-card-text>
            <div style ="font-size:30;font-weight:700;"> {{productName}}</div>
            <div style="font-size: 24px;font-weight:700;color:#ff5722; margin-top:10px;">Rp.{{productPrice}}</div>
            <div style="margin-top:10px;font-size:24;font-weight:700;">Product Detail</div>
            <div style="margin-top:10px;">{{productDescription}}</div>
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
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
      productPrice:this.$route.params.Pid.productPrice,
      productImage:this.$route.params.Pid.urlImage,
      productImage: this.globalVar+"/product/image/"+this.$route.params.Pid.productId
   }
  }
 }
</script>
