import "./HomeBlock1.css";
import heroImg1 from "../../assets/home_block1/hero-img1.jpg";
import heroImg2 from "../../assets/home_block1/hero-img2.png";
import heroImg3 from "../../assets/home_block1/hero-img3-test.png";
import heroImg4 from "../../assets/home_block1/hero-img4.png";
import {useState} from "react";

function HeroNavDots({dotAmount, intImg}) {
    return (
        <div className="dot-wrapper">
            {Array.from({length: dotAmount}).map((_,index) => (
                intImg === index ? (
                    <span className="actvie-dot" key={index} />
                 ) : (
                    <span className="dot" key={index} />
                )
            ))}
            
        </div>
    );
}

function HeroTitle({imgNum}) {
    const heroTitles = ["chase the wind", "roads can be harsh", "whatever your bike needs", "Be ready for obstacles"];

    if (heroTitles[imgNum] === "roads can be harsh") {
        return (
            <div style={{
                position: "absolute",
                top: "7%",
                color: "rgba(252, 252, 252, 1)",
                fontSize: "140px"
            }}>
                {heroTitles[imgNum]}
            </div>
        );
    } else if (heroTitles[imgNum] === "whatever your bike needs") {
        return (
            <div style={{
                position: "absolute",
                top: "7%",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "140px"
            }}>
                {heroTitles[imgNum]}
            </div>
        );
    } else if (heroTitles[imgNum] === "Be ready for obstacles") {
        return (
            <div style={{
                position: "absolute",
                top: "7%",
                color: "rgba(255, 255, 255, 1)",
                fontSize: "140px"
            }}>
                {heroTitles[imgNum]}
            </div>
        );
    }


    return (
        <div style={{
            position: "absolute",
            top: "7%",
            color: "rgba(0, 0, 0,0.6)",
            fontSize: "140px"
        }}>
            {heroTitles[imgNum]}
        </div>
    );
}

export function HomeBlock1() {
    const images = [heroImg1, heroImg2, heroImg3, heroImg4];
    let [intImg, setIntImg] = useState(0);

    function setHeroImage(direction) {
        
        if (direction === "right") {
            setIntImg((prev) => {
                const newValue = prev + 1;
                if (newValue > images.length -1 ) return 0;
                return newValue;
            });

        } else if (direction === "left") {
            setIntImg((prev) => {
                const newValue = prev - 1;
                if (newValue < 0) return images.length-1;
                return newValue;
            });
        }


    }

    return (
        <div className="home-Block1">
            <button onClick={() => setHeroImage("left")} className="scroll-left-btn">{"<"}</button>

            <div className="hero-img-wrapper">
                <img className="hero-img" src={images[intImg]} alt="motocycle"/>
            </div>
            
            <HeroTitle imgNum={intImg} />
            <button onClick={() => setHeroImage("right")} className="scroll-right-btn">{">"}</button>
            
            <div className="shop-button-wrapper">
                <button className="shop-btn"> SHOP </button>
            </div>
            
            <HeroNavDots dotAmount={images.length} intImg={intImg}/>


        </div>
    );
}