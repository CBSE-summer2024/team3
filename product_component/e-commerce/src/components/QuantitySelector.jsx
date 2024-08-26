import { useState } from "react";

const Quantity = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = (value) => {
        if (quantity + value > 0) {
            setQuantity(quantity + value);
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={() => handleQuantityChange(-1)}>-</button>
            <span>{quantity}</span>
            <button onClick={() => handleQuantityChange(1)}>+</button>
        </div>
    );
};

export default Quantity;