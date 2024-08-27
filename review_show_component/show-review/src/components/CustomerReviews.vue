<template>
  <div class="main-container">
    <ReviewsContainer :reviews="reviews" />
  </div>
</template>

<script>
import ReviewsContainer from './SliderComponent.vue';
import reviewsData from "../assets/reviews.json";

export default {
  components: {
    ReviewsContainer,
  },
  data() {
    return {
      reviews: reviewsData,
    };
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
}
</style>
