import "./UserPage.css"

import { useState } from "react";

export function UserPage() {
    const [section, setSection] = useState('account');

    return (
        <div className="user-page">
            <div className="menu-container">

                <div className="menu">

                    <p className="username">Marko Markovi</p>

                    <button onClick={() => setSection('account')} className="left-button">
                        acc. details
                    </button>

                    <button onClick={() => setSection('stats')} className="left-button">
                        statistics
                    </button>

                    <button onClick={() => setSection('orders')} className="left-button">
                        orders
                    </button>

                    <button className="left-button">
                        logout
                    </button>

                </div>
                

            </div>


            {section === 'account' && <AccountDetails />}
            {section === 'orders' && <Orders />}

        </div>
    )
}

function AccountDetails() {
    return(
        <div className="account-details">
            <div className="user-info">
                <p>Name: Marko</p>
                <p>Surname: Markovic</p>
                <p>E-mail: markMark@gmail.com</p>
                <p>Phone num.: +38 611  222 333</p>
            </div>

            <div className="user-info-settings">
                <button className="setting-button">
                    change password
                </button>

                <button className="setting-button">
                    change email
                </button>

                <button className="setting-button">
                    edit profile
                </button>
            </div>


            <p className="sub-title"> delivery address </p>

            <div className="adres-container">
                <AdresCard />
                
                <button className="add-adres-button"> + add adres </button>

            </div>


            <p className="sub-title"> card inforamtion </p>

            <div className="adres-container">
                <CardCard />
                
                <button className="add-adres-button"> + add card </button>
                
            </div>

        </div>
    )
}

function AdresCard() {
    return(
        <div className="adres-card">
            <p>Marko Markovic</p>
            <p>Cesta 1</p>
            <p>6001 Grad</p>
        </div>
    )
}

function CardCard() {
    return(
        <div className="adres-card">
            <p>Marko Markovic</p>
            <p>2352352353537</p>
            <p>17/29</p>
            <p>229</p>
        </div>
    )
}

function Orders() {
    return (
        <div className="orders">

            <div className="sub-title"> OPEN ORDERS </div>

            <div className="orders-container">

                <OpenOrdersCard />
                <OpenOrdersCard />
                <OpenOrdersCard />
                <OpenOrdersCard />
                <OpenOrdersCard />

            </div>

            <div className="sub-title"> CLOSED ORDERS </div>

            <div className="orders-container">

                <ClosedOrdersCard />

            </div>

        </div>
    )
}

function OpenOrdersCard() {
    return(
        <div className="open-order">
            <div className="placeholder">napravit cu kad bude data napravljena, sad ne vredi</div>
        </div>
    )
}

function ClosedOrdersCard() {
    return(
        <div className="closed-order">
            <div className="closed-order-date"> 25.5.2025</div>

            <div className="closed-order-id"> 
                <div>Order Num.</div>
                <div>2358723845723</div>
            </div>

            <div className="closed-order-price">40,80 EUR</div>

            <div className="closed-order-img-container"> img placeholder</div>

            <button className="closed-order-button"> more details</button>
        </div>
    )
}