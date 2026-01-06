import "./GearPage.css"
import { gearData } from "../data/gearData"
import ItemCard from "../components/ItemCard"

export function GearPage() {
    return (
        <div className="gear-page">

            <div className="top-container">

                <div className="page-name">GEAR</div>

                <div className="filter-container">

                    <button className="sort-button"> filter </button>

                    <button className="sort-button"> sort by</button>

                </div>

            </div>


            <div className="grid">

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