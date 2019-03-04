<template>
<div>
    <b-card
      header="Add New Product"
      header-tag="header"
      style ="margin-bottom : 50px;"
    >
    <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
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
          placeholder="Enter price" />
      </b-form-group>

      <b-form-group id="exampleInputGroup4" label="Product Image:" label-for="exampleInput2">
        <b-form-file
        v-model="urlImage"
        :state="Boolean(file)"
        placeholder="Choose a file..."
        drop-placeholder="Drop file here..."
      />
      </b-form-group>

      <b-form-group id="exampleInputGroup3" label="Product Description:" label-for="exampleInput2">
        <b-form-textarea
       id="productDescription"
       v-model="form.productDesc"
       placeholder="Enter something"
       rows="3"
       max-rows="6"/>
      </b-form-group>
      <b-button type="submit" variant="primary" style="margin-right:10px;">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
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
          productName: '',
          productPrice: '',
          productDesc: '',
          urlImage :''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault();
        let dataTest = JSON.stringify(this.form);
        let formData = new FormData();
        formData.append('urlImage', this.urlImage);
        formData.append('productName', this.form.productName);
        formData.append('productDesc', this.form.productDesc);
        formData.append('productPrice', this.form.productPrice);
        axios.post(this.globalVar+'/product/addnewproduct', formData, {
         headers: {
           'Content-Type': 'multipart/mixed'
         }
     }
     )
     window.location = "/"
      },

      onReset(evt) {
        evt.preventDefault()
        /* Reset our form values */
        this.form.productName = ''
        this.form.productPrice = ''
        /* Trick to reset/clear native browser form validation state */
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      }
    }
  }
</script>
