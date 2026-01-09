import "./AccessoriesPage.css"
import { accessoriesData } from "../data/accessoriesData"
import ItemCard from "../components/ItemCard"

export function AccessoriesPage() {
    return (
        <div className="accessories-page">

            <div className="top-container">

                <div className="page-name">ACCESSORIES</div>

                <div className="filter-container">

                    <button className="sort-button"> filter </button>

                    <button className="sort-button"> sort by</button>

                </div>

            </div>


            <div className="grid">

                {accessoriesData.map(item => (
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