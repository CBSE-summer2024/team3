import { LitElement, html, css } from "lit";
import products from "../data/data.json";

export class RelatedItems extends LitElement {
  constructor() {
    super();
  }

  render() {
    return html`
      <div class="container">
        ${products.map(product => html`
          <div class="card">
            <img src="${product.image}" alt="${product.name}" />
            <div class="name">${product.name}</div>
            <div class="price">${product.price}</div>
            <button @click="${() => this.handleClick(product.name)}">Buy Now</button>
          </div>
        `)}
      </div>
    `;
  }

  static get styles() {
    return css`
    :host {
      display: block;
      padding: 16px;
      background-color: #f9f9f9;
      font-family: Arial, sans-serif;
    }
    .container {
      display: flex;
      flex-wrap: wrap;
      gap: 16px;
      justify-content: center;
    }
    .card {
      background-color: #ffffff;
      border: 1px solid #ddd;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      width: 200px;
      text-align: center;
      padding: 16px;
    }
    .card img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
    }
    .card .name {
      font-size: 16px;
      font-weight: bold;
      margin: 12px 0 4px;
    }
    .card .price {
      font-size: 14px;
      color: #333;
      margin: 4px 0 12px;
    }
    .card button {
      background-color: #007bff;
      color: #fff;
      border: none;
      border-radius: 4px;
      padding: 8px 16px;
      cursor: pointer;
      font-size: 14px;
    }
    .card button:hover {
      background-color: #0056b3;
    }
  `;
  }

  handleClick(productName) {
    alert(`You clicked on ${productName}`);
  }
}

customElements.define("related-items", RelatedItems);
