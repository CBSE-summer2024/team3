<template>
    <div class="slider-component">
      <h2>Customer Reviews</h2>
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
  
  <style scoped>
  .reviews-container {
    width: 100%;
    overflow: hidden;
    position: relative;
  }
  
  .reviews-container h2 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 40px;
  }
  
  .slider {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .reviews-wrapper {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 20px; 
    scrollbar-width: none; 
  }
  
  .reviews-wrapper::-webkit-scrollbar {
    display: none; 
  }
  
  .slider-btn {
    background-color: rgba(0, 0, 0, 0.781);
    border: none;
    color: white;
    padding: 10px;
    cursor: pointer;
    font-size: 24px;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 1;
  }
  
  .left-btn {
    left: 0;
  }
  
  .right-btn {
    right: 0;
  }
  </style>
  