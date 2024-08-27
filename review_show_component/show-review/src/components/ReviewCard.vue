<template>
    <div :class="{'review': true, 'expanded': expanded}">
      <h3>{{ review.name }}</h3>
      <p>
        <span v-if="isTextLong(review.comment)">
          <span v-if="!expanded">
            {{ truncatedText(review.comment) }}
            <span class="view-more" @click="$emit('toggleText')">View More</span>
          </span>
          <span v-else>
            {{ review.comment }}
            <span class="view-more" @click="$emit('toggleText')">View Less</span>
          </span>
        </span>
        <span v-else>
          {{ review.comment }}
        </span>
      </p>
      <p class="stars">{{ getStars(review.rating) }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      review: Object,
      expanded: Boolean,
    },
    methods: {
      getStars(rating) {
        return "★".repeat(rating) + "☆".repeat(5 - rating);
      },
      isTextLong(text) {
        return text.length > 30; 
      },
      truncatedText(text) {
        return text.slice(0, 30) + "..."; 
      },
    },
  };
  </script>
  
  <style scoped>
  .review {
    flex: 0 0 auto;
    width: 190px;
    padding: 20px;
    border-radius: 8px;
    background-color: white;
    text-align: center;
    transition: transform 0.2s ease, max-height 0.2s ease;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid rgba(0, 0, 0, 0.267);
    overflow: hidden;
    max-height: 150px;
    position: relative; 
  }
  
  
  .review.expanded {
    max-height: 300px; 
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
    overflow: hidden;
  }
  
  .view-more {
    color: blue;
    cursor: pointer;
    font-size: 14px;
    display: inline-block;
    margin-top: 5px;
    position: absolute; 
    bottom: 10px; 
    left: 50%;
    transform: translateX(-50%); 
  }
  </style>
  