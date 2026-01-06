import "./MotorcyclePage.css"
import { motorcycleData } from "../data/motorcycleData"
import ItemCard from "../components/ItemCard"

export function MotorcyclePage() {
    return (
        <div className="parts-page">

            <div className="top-container">

                <div className="page-name">MOTORCYCLES</div>

                <div className="filter-container">

                    <button className="sort-button"> filter </button>

                    <button className="sort-button"> sort by</button>

                </div>

            </div>


            <div className="grid">

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