import "./BestSellersItem.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const BestSellersItem = ({ product, setProductsInCart, productsInCart, productsInFavourites, setProductsInFavourites }) => {
    let navigate = useNavigate();
    const [message, setMessage] = useState("");

    const onClickHandler = () => {
        navigate(`/product/${product.id}`);
    };

    const addToCartHandler = () => {
        setProductsInCart([...productsInCart, product]);
        // navigate(`/cart`);
    };



    return (
        <div className="BestSellersItem">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>${product.price}</p>
            <button onClick={onClickHandler}>Show more...</button>
            <button onClick={addToCartHandler}>Add to Cart</button>

            {message && <p className="errorMessage">{message}</p>}
        </div>
    );
};

export default BestSellersItem;