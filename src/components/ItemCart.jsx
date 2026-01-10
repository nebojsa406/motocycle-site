import "./ItemCart.css";
import cartImg1 from "../assets/accessories_category/accessories-cardo.png";

export default function ItemCart( {cartImg, itemName, price} ) {
    return (
        <div className="item-cart-div">
            <div className="cart-div-1">
                <div className="div-1-cart-left-section">
                    <img className="item-image" src={cartImg1} alt="" />
                </div>
                <div className="div-1-cart-right-section">
                    <div className="right-container-h1"> Performance exhaust system </div>
                    <div className="grid-container">
                        <p className="p-1">In Stock</p>
                        <div className="p-2-3-div">
                            <a className="p-2" href="">Update</a>
                            <a className="p-3" href="">Delete</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="cart-div-2">
                <div className="quantity-div">
                    <p className="counter-txt">1</p>
                    <button className="counter-btn">+</button>
                </div>
                <div className="price-div">
                    <p className="price">$349.99</p>
                </div>
            </div>
        </div>
    );
}
