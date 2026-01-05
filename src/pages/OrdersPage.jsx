import "./OrdersPage.css"

export function OrdersPage() {
    return (
        <div className="orders-page">
            <div className="orders">

                <div className="title"> OPEN ORDERS </div>

                <div className="orders-container">

                    <OpenOrdersCard />
                    <OpenOrdersCard />
                    <OpenOrdersCard />
                    <OpenOrdersCard />
                    <OpenOrdersCard />

                </div>

                <div className="title"> CLOSED ORDERS </div>

                <div className="orders-container">

                    <ClosedOrdersCard />

                </div>

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