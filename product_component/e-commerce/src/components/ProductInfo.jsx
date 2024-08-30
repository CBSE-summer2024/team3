import { Component } from "react";
import PropTypes from "prop-types"; 
import "../assets/product-card.css";
import QuantitySelector from "./QuantitySelector.jsx";
import ImageSection from "./ImageSection.jsx";
import Rating from "./Rating.jsx";
import SelectionControl from "./SelectionControl.jsx";
import fetchProductData from "../services/productService.js";

export class ProductInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productData: null,
            loading: true,
            error: null,
        };
    }

    componentDidMount() {
        this.loadProductData();
    }

    loadProductData = async () => {
        try {
            const product = await fetchProductData(this.props.dataSource); 
            this.setState({ productData: product, loading: false });
        } catch (error) {
            this.setState({ error: error.message, loading: false });
        }
    };

    handleAddToCart = () => {
        alert("Added to Cart!");
        window.location.reload();
    };

    handleAddToWishlist = () => {
        alert("Added to Wishlist!");
        window.location.reload();
    };

    render() {
        const { productData, loading, error } = this.state;

        if (loading) {
            return <div>Loading...</div>;
        }

        if (error) {
            return <div>Error: {error}</div>;
        }

        const { name, price, rating, description, selectionName, selectionsData, images } = productData;

        return (
            <div className="product-card">
                <div className="product-info">
                    <h2>{name}</h2>
                    <div className="product-price-rating">
                        <p className="price">{price}</p>
                        <Rating rating={rating} />
                    </div>
                    <p className="description">{description}</p>
                    <SelectionControl selectionName={selectionName} selectionsData={selectionsData} />
                    <div className="quantity-cart-wrapper">
                        <QuantitySelector />
                        <button className="add-to-cart" onClick={this.handleAddToCart}>Add to Cart</button>
                    </div>
                    <button className="add-to-wishlist" onClick={this.handleAddToWishlist}>Add to Wishlist</button>
                </div>
                <ImageSection images={images} />
            </div>
        );
    }
}

ProductInfo.propTypes = {
    dataSource: PropTypes.string.isRequired, 
};

export default ProductInfo;
