import { Component } from "react";
import "../assets/product-card.css";
import QuantitySelector from "./QuantitySelector"
import productData from "../../data/data.json"; 
import ImageSection from "./ImageSection";
import Rating from "./Rating"
import ThumbnailSelector from "./ThumbnailSelector";

export class ProductInfo extends Component {
    render() {
        const { name, price, rating, description, thumbnails, images } = productData.product;
        return (
            <div className="product-card">
                <div className="product-info">
                    <h2>{name}</h2>
                    <div className="product-price-rating">
                        <p className="price">{price}</p>
                        <Rating rating={rating} />
                    </div>
                    <p className="description">{description}</p>
                    <ThumbnailSelector thumbnails={thumbnails} />
                    <QuantitySelector />
                    <button className="add-to-cart">Add to Cart</button>
                    <button className="add-to-wishlist">Add to Wishlist</button>
                </div>
                <ImageSection images={images} />
            </div>
        );
    }
}

