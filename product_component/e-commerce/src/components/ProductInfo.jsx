import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../assets/product-card.css";
import QuantitySelector from "./QuantitySelector.jsx";
import ImageSection from "./ImageSection.jsx";
import Rating from "./Rating.jsx";
import SelectionControl from "./SelectionControl.jsx";
import fetchProductData from "../services/productService.js";

const ProductInfo = ({ dataSource }) => {
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProductData = async () => {
            try {
                const product = await fetchProductData(dataSource);
                setProductData(product);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        loadProductData();
    }, [dataSource]);

    const handleAddToCart = () => {
        alert("Added to Cart!");
        window.location.reload();
    };

    const handleAddToWishlist = () => {
        alert("Added to Wishlist!");
        window.location.reload();
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const { name, price, rating, description, selectionName, selectionData, images } = productData;

    return (
        <div className="product-card">
            <div className="product-info">
                <h2>{name}</h2>
                <div className="product-price-rating">
                    <p className="price">{price}</p>
                    <Rating rating={rating} />
                </div>
                <p className="description">{description}</p>
                <SelectionControl selectionName={selectionName} selectionData={selectionData} />
                <div className="quantity-cart-wrapper">
                    <QuantitySelector />
                    <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
                </div>
                <button className="add-to-wishlist" onClick={handleAddToWishlist}>Add to Wishlist</button>
            </div>
            <ImageSection images={images} />
        </div>
    );
};

ProductInfo.propTypes = {
    dataSource: PropTypes.string.isRequired,
};

export default ProductInfo;
