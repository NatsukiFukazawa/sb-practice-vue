<template>
  <div>
    <router-link
      :to="{
        name: 'detail',
        params: {
          id: product.productId,
        },
        query: {
          productName: product.productName,
          review: product.review,
          image: product.image,
        },
      }"
      >詳細</router-link
    >
    {{ product.productId }}
    {{ product.productName }}
    {{ product.review }}
    {{ product.image }}
  </div>
</template>

<script>
export default {
  props: {
    product: Object,
  },
};
</script>

<style></style>
