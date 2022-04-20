<template>
  <div>
      {{product.productId}}
      {{product.productName}}
      {{product.review}}
      {{product.image}}
  </div>
</template>

<script>
export default {
    props:{
        product : Object,
    },
}
</script>

<style>

</style>