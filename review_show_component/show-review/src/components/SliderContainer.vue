<template>
  <div class="slider-container">
    <h2 class="reviews-heading">Customer Reviews</h2>
    <div class="slider">
      <button @click="slideLeft" class="slider-btn left-btn">‹</button>
      <div class="reviews-wrapper" ref="reviewsWrapper">
        <ReviewCard
          v-for="review in reviews"
          :key="review.id"
          :review="review"
          :expanded="expandedReviews[review.id]"
          @toggleText="toggleText(review.id)"
        />
      </div>
      <button @click="slideRight" class="slider-btn right-btn">›</button>
    </div>
  </div>
</template>

<script>
import ReviewCard from './ReviewCard.vue';

export default {
  components: {
    ReviewCard,
  },
  props: {
    reviews: Array,
  },
  data() {
    return {
      expandedReviews: {},
    };
  },
  methods: {
    toggleText(id) {
      this.expandedReviews = {
        ...this.expandedReviews,
        [id]: !this.expandedReviews[id],
      };
    },
    slideLeft() {
      this.$refs.reviewsWrapper.scrollBy({ left: -200, behavior: 'smooth' });
    },
    slideRight() {
      this.$refs.reviewsWrapper.scrollBy({ left: 200, behavior: 'smooth' });
    },
  },
};
</script>

<style src="../style/styles.css" scoped></style>
