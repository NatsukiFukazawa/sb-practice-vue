<template>
  <v-container>
    <v-text-field v-model="reviewText" />
    <v-btn @click="addProduct">レビュー投稿</v-btn>
  </v-container>
</template>

<script>
import addreview from "../api/addreview";
export default {
  data: function () {
    return {
      reviewText: "",
    };
  },

  methods: {
    addProduct() {
      const body = {
        productId: this.$route.id,
        userId: this.$store.userId,
        reviewText: this.reviewText,
      };
      addreview(body)
        .then(() => {
          this.$router.push("/home");
        })
        .catch((e) => {
          console.log(e.message);
        });
    },
  },
};
</script>

<style></style>
