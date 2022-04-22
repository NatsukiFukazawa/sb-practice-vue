<template>
    <v-container>
          <div v-for="product in products" :key="product.productId" >
            <ProductMolecule :product = "product"/>
            <!-- {{test}} -->
          </div>          
  </v-container>
</template>

<script>
import getProduct from '../api/getProduct'
import ProductMolecule from './ProductMolecule.vue';
import testapi from '../api/testapi'
import TestComponent from './TestComponent.vue'


export default {
  components: { ProductMolecule,TestComponent },
  data:function(){
    return {
    products:[],
    test:[],
    }
  },
  created(){
    // axios
    // .get('https://jsonplaceholder.typicode.com/users/')
    // .then(res => (this.test =res))

    testapi().then(res => (this.test =res))
    getProduct().then((res)=>this.products = res)
  },
  mounted(){
  },
  methods:{
  }

}
</script>

<style>

</style>