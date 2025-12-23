import "./HomeBlock1.css";
import heroImage1 from "../../assets/home_block1/hero-image1-noBG.png";
import heroImage2 from "../../assets/home_block1/hero-image2.jpg";
import heroImage3 from "../../assets/home_block1/hero-image3.jpg";
import {useState} from "react";
import "../ShopBtn.css";

function HeroNavDots({dotAmount}) {
    return (
        <div className="dot-wrapper">
            {Array.from({length: dotAmount}).map((_,index) => (
                <div key={index}>
                    dot
                </div>
            ))}
            
        </div>
    );
}

export function HomeBlock1() {
    const images = [heroImage1, heroImage2, heroImage3];
    let [intImg, setIntImg] = useState(0);

    function setHeroImage(direction) {
        
        if (direction === "right") {
            setIntImg((prev) => {
                const newValue = prev + 1;
                if (newValue > 2) return 0;
                return newValue;
            });

        } else if (direction === "left") {
            setIntImg((prev) => {
                const newValue = prev - 1;
                if (newValue < 0) return 2;
                return newValue;
            });
            // let newValue = intImg - 1;
            // if (newValue < 0) {
            //     setIntImg(2);
            // } else {
            //     setIntImg(newValue);
            // }
        }


    }

    return (
        <div className="home-Block1">
            <button onClick={() => setHeroImage("left")} className="scroll-left-btn">{"<"}</button>

            <img className="hero-img" src={images[intImg]} alt="motocycle"/>

            <button onClick={() => setHeroImage("right")} className="scroll-right-btn">{">"}</button>
            
            <div className="shop-button-wrapper">
                <button className="shop-button"> SHOP </button>
            </div>

            <HeroNavDots dotAmount={images.length}/>


        </div>
    );
}