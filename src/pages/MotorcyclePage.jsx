import "./MotorcyclePage.css"
import ItemCard from "../components/ItemCard.jsx"

import { motorcycleData } from "../data/motorcycleData.js"

import filterIcon from "../assets/filter-icon.png"

export function MotorcyclePage() {
    return (
        <div className="motorcycles-page">

            <div className="top-category-name"> motorcycles </div>

            <div className="filter-sort-container">

                <button className="filter-button">
                    <img className="filter-button-img" src={filterIcon} />
                </button>

                <div className="sorting"> sort by </div>

            </div>


            <div className="card-container">
                
                {motorcycleData.map(item => (
                    <ItemCard 
                        key={item.id}
                        id={item.id}
                        img={item.img}
                        name={item.name}
                        price={item.price}
                        category={item.category}
                    />
                ))}

            </div>

        </div>
    )
}