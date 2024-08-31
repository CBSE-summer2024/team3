<template>
  <div class="review">
    <h3>{{ review.name }}</h3>
    <div :class="{'review-content': true, 'scrollable': isTextLong(review.comment)}">
      <p>{{ review.comment }}</p>
    </div>
    <p class="stars">{{ getStars(review.rating) }}</p>
  </div>
</template>


<script>
export default {
  props: {
    review: Object,
  },
  methods: {
    getStars(rating) {
      return "★".repeat(rating) + "☆".repeat(5 - rating);
    },
    isTextLong(text) {
      return text.length > 30; 
    },
  },
};
</script>

<style src="../style/styles.css" scoped></style>