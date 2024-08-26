import { LitElement, html } from "lit";
import { fetchData } from "./utils/data-fetcher";
import { renderProductList } from "./components/product-list";
import { relatedItemsStyles } from "./styles/related_items_style.css";

export class RelatedItems extends LitElement {
  static properties = {
    dataSource: { type: String, attribute: "data-source" },
    products: { type: Array },
  };

  static styles = [relatedItemsStyles];

  constructor() {
    super();
    this.products = [];
    this.dataSource = "";
  }

  async firstUpdated() {
    if (this.dataSource) {
      try {
        this.products = await fetchData(this.dataSource);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
  }

  render() {
    return html`
      <section class="related-items" aria-labelledby="related-items-heading">
        <h2 id="related-items-heading">Related Products</h2>
        ${renderProductList(this.products, this.handleClick)}
      </section>
    `;
  }

  handleClick(productName) {
    alert(`You clicked on ${productName}`);
  }
}

customElements.define("related-items", RelatedItems);
