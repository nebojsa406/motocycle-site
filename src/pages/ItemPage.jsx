import "./ItemPage.css"

import { useParams } from "react-router-dom";
import { dataMap } from "../data/allData";

export function ItemPage() {
  const { category, id } = useParams();

  const items = dataMap[category];
  const item = items?.find(item => item.id === id);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="item-page">
        <div className="item-card-container">
            <div className="left-side">

                <img className="image" src={item.img} alt={item.name} />

            </div>
            
            <div className="right-side">

                <div className="item-name"> {item.name} </div>
                <div className="item-price"> ${item.price} </div>
                <div className="mini-description"> {item.description} </div>
                <button className="button"> add to cart </button>
                <button className="button"> favorite </button>

            </div>

        </div>
      
    </div>
  );
}