import "./CartPage.css"
import lockImg from "../assets/lock-icon.png";
import {ItemCart} from "../components/ItemCart.jsx";
import { Link } from "react-router-dom";

export function CartPage() {
    return (
        <div className="cart-page">
            <h1 className="cart-page-title">You'r shopping cart</h1>

            <div className="global-container">
                <div className="items-container">
                    <div className="items-container-header">
                        <p className="items-container-header-section-1">Items list</p>
                        <p className="items-container-header-section-2">Quantity</p>
                        <p className="items-container-header-section-3">Price</p>
                    </div>

                    <div className="item-cart-inner-container">
                        <ItemCart/>
                    </div>
                    

                </div>

                <div className="order-summary-container">
                    <h1 className="order-summary-h1">Order Summary</h1>

                    <div className="chackout-container">
                        <div className="sub-total-container">
                            <p className="subtotal-text">Subtotal (3 itmes)</p>
                            <p className="subtotal-price">$549.97</p>
                        </div>
                        
                        <div className="proceed-btn-txt-container">
                            <Link className="proceed-btn" to="/cart/checkout">Proceed to Checkout</Link>
                            <p className="proceed-txt">Shipping and tax calculated at checkout</p>
                        </div>
                    </div>

                    <div className="secure-chackout-container">
                        <img className="lock-img" src={lockImg} alt="" />
                        <p className="secure-checkout-txt">Secure chackout</p>
                    </div>
                </div>
            </div>
        </div>
    )
}