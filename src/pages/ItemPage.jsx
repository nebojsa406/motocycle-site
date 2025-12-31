import "./ItemPage.css"

import { useState } from "react";

import { useParams } from "react-router-dom";
import { dataMap } from "../data/allData";

export function ItemPage() {
  const [showReviews, setShowReviews] = useState(false);
  const [showDescription, setShowDescription] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const { category, id } = useParams();

  const items = dataMap[category];
  const item = items?.find(item => item.id === id);

  if (!item) return <h2>Item not found</h2>;

  return (
    <div className="item-page">
        <div className="item-card-container">
            <div className="left-side">

              <div className="small-images-container">

                <div className="small-img-container"> placeholder </div>
                <div className="small-img-container"> placeholder </div>
                <div className="small-img-container"> placeholder </div>
                <div className="small-img-container"> placeholder </div>
                <div className="small-img-container"> placeholder </div>
                <div className="small-img-container"> placeholder </div>
                <div className="small-img-container"> placeholder </div>

              </div>

              <div className="left-side-mid-section">

                <div className="img-container">
                  <img className="image" src={item.img} alt={item.name} />
                </div>

                <div className="mid-buttons-container">
                  <button className="mid-button"> &lt; </button>
                  <button className="mid-button"> &gt; </button>
                </div>

              </div>

            </div>
            
            <div className="right-side">

                <div className="item-name"> {item.name} </div>
                <div className="item-price"> ${item.price} </div>

                <div className="mini-description"> {item.description} </div>

                <button className="button"> add to cart </button>
                <button className="button"> favorite </button>

            </div>

        </div>

        <div className="info-container">

          <div className="review-section">

            <button onClick={() => setShowReviews(prev => !prev)} className="info-button">
              <div className="info-button-txt">
                <div className="info-button-left"> Review (0) </div>
                <div className="info-button-right"> {showReviews ? "/\\" : "\\/"} </div>
              </div>
            </button>

            {showReviews&&<TestComponet />}

          </div>
          
          <div className="description-section">

            <button onClick={() => setShowDescription(prev => !prev)} className="info-button">
              <div className="info-button-txt">
                <div className="info-button-left"> Description </div>
                <div className="info-button-right"> {showDescription ? "/\\" : "\\/"} </div>
              </div>
            </button>

            {showDescription&&<TestComponet />}

          </div>
          

          <div className="details-section">

            <button onClick={() => setShowDetails(prev => !prev)} className="info-button">
              <div className="info-button-txt">
                <div className="info-button-left"> Details </div>
                <div className="info-button-right"> {showDetails ? "/\\" : "\\/"} </div>
              </div>
            </button>

            {showDetails&&<TestComponet />}

          </div>

        </div>
      
    </div>
  );
}

function TestComponet() {
  return (
    <div className="test">

    </div>
  )
}