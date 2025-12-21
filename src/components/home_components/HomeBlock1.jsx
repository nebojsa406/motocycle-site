import "./HomeBlock1.css";
import heroImage1 from "../../assets/home_block1/hero-image3-noBG.png";
import ShopBtn from "../ShopBtn";

export function HomeBlock1() {
    return (
        <div className="home-Block1">
            <button className="scroll-left-btn">{"<"}</button>
            <img className="hero-img" src={heroImage1} alt="motocycle"/>
            <button className="scroll-right-btn">{">"}</button>

            <ShopBtn/>

        </div>
    );
}