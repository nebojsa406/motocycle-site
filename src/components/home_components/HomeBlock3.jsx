import "./HomeBlock3.css";

import { motorcycleData } from "../../data/motorcycleData.js";
import { gearData } from "../../data/gearData.js";

import ItemCard from "../ItemCard.jsx"


export function HomeBlock3() {

    return (
        <div className="Home-Block3">

            <div className="top-txt"> POPULAR </div>

            <div className="horizontal-scroll">

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

            <div className="horizontal-scroll">

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
    );
}