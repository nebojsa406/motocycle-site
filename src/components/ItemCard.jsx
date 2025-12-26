import "./ItemCard.css"

import addToCartIcon from "../assets/add-cart-icon.png"
import { Link } from "react-router"




export default function ItemCard( {img, name, price} ) {

    return (
        <Link className="card-link" to="/item">

            <div className="card">
                <div className="card-img-container">

                    <img className="card-img" src={img}/>

                </div>

                

                <div className="card-txt-container">

                    <div className="card-bike-name"> {name} </div>

                    <div className="card-bike-price"> ${price} </div>

                    <div className="cart-link-container">

                        <Link className="cart-link" to="/cart"> <img className="cart-link-img" src={addToCartIcon} /> </Link>

                    </div>
                    

                </div>

            </div>
        
        </Link>
        
    )
}
