<template>
  <div class="main-container">
    <SliderContainer :reviews="reviews" />
  </div>
</template>

<script>
import SliderContainer from './SliderContainer.vue';
import reviewsData from "../data/reviews.json";

export default {
  components: {
    SliderContainer,
  },
  data() {
    return {
      reviews: reviewsData,
    };
  },
};
</script>

<style src="../style/styles.css" scoped></style>