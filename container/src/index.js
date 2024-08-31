import React from 'react';
import ReactDOM from 'react-dom/client';
import ProductInfo from '../../product_component/e-commerce/src/components/ProductInfo.jsx';
import '../../related_items_component/related_items/src/my-element.js';
import VueComponent from '../../review_show_component/show-review/src/components/CustomerReviews.vue';
import { createApp } from 'vue';
import ReviewForm from '../../review_component/review-component/src/components/ReviewForm.js'

const reactRoot = ReactDOM.createRoot(document.getElementById('react-root'));
reactRoot.render(<ProductInfo dataSource = {"./data/product.json"} />);

const vueApp = createApp(VueComponent);
vueApp.mount('#vue-root');

const reactReveiw = ReactDOM.createRoot(document.getElementById('react-review'));
reactReveiw.render(<ReviewForm />);

