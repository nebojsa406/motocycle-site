import "./CheckoutPage.css";
import lockImg from "../assets/lock-icon.png";
import { Link } from "react-router-dom";
import { countries } from "../data/countries";

function CountrySelectBar({ className, countries }) {
    return (
        <select className={className}>
            {countries.map((country) => (
                <option key={country.code} value={country.code} > {country.name} </option>
            ))}
        </select>
    );
}


export function CheckoutPage() {
    return (
        <div className="checkout-page">
            <h1 className="checkout-page-title">Cart checkout</h1>

            <div className="global-container">

                <div className="payment-form-container">
                    <h1 className="payment-form-h1">Contact Information</h1>

                    <div className="email-div">
                        <div className="inner-email-div">
                            <p>Email Adress</p>
                            <input className="email-input" placeholder="type your email" type="text" />
                        </div>
                        <div className="under-email-input-div">
                            <p className="email-under-text"> Already have an account? </p>
                            <a className="log-in-link" href="">Log in</a>
                        </div>

                    </div>

                    <div className="shipping-adress-div">
                        <h1>Shipping Address</h1>

                        <div className="input-fields-div">
                            <input className="name-input" type="text" placeholder="Full Name" />
                            <input className="city-input" type="text" placeholder="City" />
                            <input className="adress-input" type="text" placeholder="Adress" />
                            <input className="zip-input" type="text" placeholder="ZIP / Postal Code" />

                            <CountrySelectBar className={"country-select-bar"} countries={countries} />
                        </div>
                    </div>

                    <div className="payment-method-div">
                        <h1>Payment Method</h1>

                        <div className="everything-under-title">
                            <div className="card-info-div">
                                <div className="card-mm-yy-div">
                                    <div className="card-payment-icons">
                                        <p>card images go here</p>
                                    </div>

                                    <div className="inner-mm-yy-div">
                                        <input type="text" placeholder="MM / YY" />
                                        <input type="text" placeholder="CVC" />
                                    </div>
                                </div>
                                <input className="card-number-input" type="text" placeholder="Card Number" />
                            </div>

                            <div className="pay-button-div">
                                <div>
                                    <img className="lock-img" src={lockImg} alt="" />
                                    <p>Secure payment with SSL</p>
                                </div>
                                <button className="left-section-pay-btn">Pay $559.96</button>
                            </div>
                        </div>

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
                            <Link className="proceed-btn" to="/cart/checkout">Pay</Link>
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