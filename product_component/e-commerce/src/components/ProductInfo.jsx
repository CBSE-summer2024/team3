import { Component } from "react";
import "../assets/product-card.css";
import QuantitySelector from "./QuantitySelector.jsx"
import productData from "../../data/data.json"; 
import ImageSection from "./ImageSection.jsx";
import Rating from "./Rating.jsx"
import SelectionControl from "./SelectionControl.jsx";

export class ProductInfo extends Component {
    render() {
        const { name, price, rating, description, selections, images } = productData.product;
        return (
            <div className="product-card">
                <div className="product-info">
                    <h2>{name}</h2>
                    <div className="product-price-rating">
                        <p className="price">{price}</p>
                        <Rating rating={rating} />
                    </div>
                    <p className="description">{description}</p>
                    <SelectionControl selections={selections} />
                    <div className="quantity-cart-wrapper">
                        <QuantitySelector />
                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                    <button className="add-to-wishlist">Add to Wishlist</button>
                </div>
                <ImageSection images={images} />
            </div>
        );
    }
}

