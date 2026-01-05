import "./Header.css"
import searchIcon from "../assets/header/search-icon.png"
import cartIcon from "../assets/header/cart-icon.png"
import userIcon from "../assets/header/user-icon.png"

import logo from "../assets/logo.png"
import { Link } from "react-router-dom"


export function Header() {
    return (
        <div className="header">

            <Link className="left-container" to="/">
                <img className="logo-img" src={logo} />
            </Link>

            <div className="mid-container">
                
                <Link className="category-link" to="/motorcycles"> bikes </Link>
                <Link className="category-link" to="/gear"> gear </Link>
                <Link className="category-link" to="/parts"> parts </Link>
                <Link className="category-link" to="/accessories"> accessories </Link>
                
            </div>

            <div className="right-container">

                <img className="icon" src={searchIcon} />

                <div className="user-icon-wrapper">

                    <Link className="icon" to="/user">
                        <img className="icon" src={userIcon} />
                    </Link>

                    <div className="user-popout">
                        <div className="user-name">Name Surname</div>
                        <Link className="popout-link" to="/user">Profile</Link>
                        <Link className="popout-link" to="/orders">Orders</Link>
                        <Link className="popout-link" to="/logout">Logout</Link>
                    </div>

                </div>
                

                <Link className="icon" to="/cart">
                    <img className="icon" src={cartIcon} />
                </Link>

            </div>

        </div>
    );
}