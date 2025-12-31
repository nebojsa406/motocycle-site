import "./PartsPage.css"
import { partsData } from "../data/partsData"
import ItemCard from "../components/ItemCard"

export function PartsPage() {
    return (
        <div className="parts-page">

            <div className="top-container">

                <div className="page-name"> ACCESSORIES</div>

                <div className="filter-container">

                    <button className="sort-button"> filter </button>

                    <button className="sort-button"> sort by</button>

                </div>

            </div>


            <div className="grid">

                {partsData.map(item => (
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