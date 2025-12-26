import "./GearPage.css"

import ItemCard from "../components/ItemCard.jsx"

import gear1 from "../assets/home_block3/gear-boots.png"
import gear2 from "../assets/home_block3/gear-chest.png"
import gear3 from "../assets/home_block3/gear-gloves.png"
import gear4 from "../assets/home_block3/gear-helmet.png"
import gear5 from "../assets/home_block3/gear-hoodie.png"
import gear6 from "../assets/home_block3/gear-pants.png"

import filterIcon from "../assets/filter-icon.png"

export function GearPage() {
    return (
        <div className="gear-page">
            <div className="top-category-name">
                motorcycles
            </div>

            <div className="filter-sort-container">

                <button className="filter-button">
                    <img className="filter-button-img" src={filterIcon} />
                </button>

                <div className="sorting"> sort by </div>

            </div>


            <div className="card-container">
                
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />
                <ItemCard name={"boots"} price={"100"} img={gear1} />
                <ItemCard name={"chest"} price={"100"} img={gear2} />
                <ItemCard name={"gloves"} price={"100"} img={gear3} />
                <ItemCard name={"helmet"} price={"100"} img={gear4} />
                <ItemCard name={"hoodie"} price={"100"} img={gear5} />
                <ItemCard name={"pants"} price={"100"} img={gear6} />

            </div>
        </div>
    )
}