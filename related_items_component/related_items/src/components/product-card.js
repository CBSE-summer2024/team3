import { html } from "lit";

export function renderProductCard(product, handleClick) {
  return html`
    <div
      class="card"
      role="listitem"
      aria-label="${product.name}, ${product.price}"
    >
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="name">${product.name}</div>
      <div class="price">${product.price}</div>
      <button @click="${() => handleClick(product.name)}">Buy Now</button>
    </div>
  `;
}
