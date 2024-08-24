<template>
  <div class="reviews-container">
    <h2>Customer Reviews</h2>
    <div class="slider">
      <button @click="slideLeft" class="slider-btn left-btn">‹</button>
      <div class="reviews-wrapper" ref="reviewsWrapper">
        <div v-for="review in reviews" :key="review.id" class="review">
          <h3>{{ review.name }}</h3>
          <p class="stars">{{ getStars(review.rating) }}</p>
          <p>{{ review.comment }}</p>
        </div>
      </div>
      <button @click="slideRight" class="slider-btn right-btn">›</button>
    </div>
  </div>
</template>


<script>
import reviewsData from "../assets/reviews.json";

export default {
  data() {
    return {
      reviews: [],
    };
  },
  created() {
    this.reviews = reviewsData;
  },
  methods: {
    getStars(rating) {
      return "★".repeat(rating) + "☆".repeat(5 - rating);
    },
    slideLeft() {
      this.$refs.reviewsWrapper.scrollLeft -= 300;
    },
    slideRight() {
      this.$refs.reviewsWrapper.scrollLeft += 300;
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


.review {
  flex: 0 0 auto;
  width: 190px;
  padding: 20px;
  border-radius: 8px;
  background-color: whitesmoke;
  text-align: center;
  transition: transform 0.2s ease;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd; 
}


.review:hover {
  transform: translateY(-5px);
}

.review h3 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.review .stars {
  color: #f39c12;
  margin-bottom: 10px;
  font-size: 20px;
}

.review p {
  font-size: 16px;
  margin: 10px 0;
  word-wrap: break-word;
}

.slider-btn {
  background-color: gray;
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
