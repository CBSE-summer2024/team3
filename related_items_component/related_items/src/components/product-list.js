import { html } from "lit";
import { renderProductCard } from "./product-card.js";

export function renderProductList(products, handleClick) {
  return html`
    <div class="container" role="list" aria-labelledby="product-list">
      ${products.length > 0
        ? products.map((product) => renderProductCard(product, handleClick))
        : html`<p>Loading products...</p>`}
    </div>
  `;
}
