import "./ItemCard.css"

import addToCartIcon from "../assets/add-cart-icon.png"
import { Link } from "react-router"




export default function ItemCard( {id, img, name, price, category} ) {

    return (
        <Link className="card-link" to={`/${category}/${id}`}>

            <div className="card">

                <div className="card-img-container">
                    <img className="card-img" src={img} alt={name}/>
                </div>


                <div className="card-txt-container">

                    <div className="card-name"> {name} </div>

                    <div className="card-price"> ${price} </div>

                    <div className="cart-link-container">
                        <Link className="cart-button" to="/cart"> <img className="cart-button-img" src={addToCartIcon} /> </Link>
                    </div>
                    
                </div>

            </div>
        
        </Link>
        
    )
}
