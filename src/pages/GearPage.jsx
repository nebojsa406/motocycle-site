import "./GearPage.css"

import ItemCard from "../components/ItemCard.jsx"
import { gearData } from "../data/gearData.js"

import filterIcon from "../assets/filter-icon.png"

export function GearPage() {
    return (
        <div className="gear-page">

            <div className="top-category-name"> motorcycles </div>

            <div className="filter-sort-container">

                <button className="filter-button">
                    <img className="filter-button-img" src={filterIcon} />
                </button>

                <div className="sorting"> sort by </div>

            </div>


            <div className="card-container">
                
                {gearData.map(item => (
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