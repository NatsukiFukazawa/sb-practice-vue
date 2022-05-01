<template>
  <v-container>
    {{ id }}
    {{ productName }}

    <p v-for="(revie, index) in review" :key="index">{{ revie }}</p>
    {{ image }}
    <v-btn @click="routerPushReviewAdd"> addReview </v-btn>
  </v-container>
</template>

<script>
export default {
  props: {
    id: Number,
    // productName: String,
    // review: Array,
    // image: String,
  },
  methods: {
    routerPushReviewAdd() {
      console.log(this.id);
      this.$router.push({
        // path: "/index/:id/addreview",
        name: "addreview",
        params: { id: this.id },
      });
    },
  },
  computed: {
    productName() {
      return this.$route.query.productName;
    },
    review() {
      return this.$route.query.review;
    },
    image() {
      return this.$route.query.image;
    },
  },
  created() {
    console.log(this.$router.query);
  },
};
</script>

<style></style>
