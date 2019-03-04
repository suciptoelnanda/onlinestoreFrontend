<template>
<div>
    <b-card
      header="Update Product"
      header-tag="header"
      style ="margin-bottom : 50px;"
    >
    <div>
    <b-form @submit="onSubmit" @reset="onBack" v-if="show">
      <b-form-group
        id="exampleInputGroup1"
        label="Product Name:"
        label-for="exampleInput1"
      >
        <b-form-input
          id="productName"
          type="text"
          v-model="form.productName"
          required
          placeholder="Enter Product Name" />
      </b-form-group>

      <b-form-group id="exampleInputGroup2" label="Product Price:" label-for="exampleInput2">
        <b-form-input
          id="productPrice"
          type="text"
          v-model="form.productPrice"
          required
          placeholder="Enter name" />
      </b-form-group>
      </b-form-group>
      <b-button type="submit" variant="primary" style="margin-right:10px;">Update</b-button>
      <b-button type="reset" variant="danger">Cancel</b-button>
    </b-form>
  </div>
    </b-card>

</div>
</template>

<script>
 import axios from "axios";
 import SETTING from "../setting.js";
  export default {
    data() {
      return {
        form: {
          productName: this.$route.params.Pid.productName,
          productPrice: this.$route.params.Pid.productPrice
        },
        productId : this.$route.params.Pid.productId,
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        let dataTest = JSON.stringify(this.form);
        let formData = new FormData();
        formData.append('productName', this.form.productName);
        formData.append('productId', this.productId);
        formData.append('productPrice', this.form.productPrice);

      axios.post(this.globalVar+'/product/updateproduct', formData, {
         headers: {
           'Content-Type': 'multipart/mixed'
         }
     }
     )
     window.location = "/"
      },

      onBack(evt) {
        evt.preventDefault();
        this.$router.push("/");
      }
    }
  }
</script>
