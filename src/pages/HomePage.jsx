import { HomeBlock1 } from "../components/home_components/HomeBlock1";
import { HomeBlock2 } from "../components/home_components/HomeBlock2";
import { HomeBlock3 } from "../components/home_components/HomeBlock3";

import "./HomePage.css"

export function HomePage() {
    return (
        <div className="home-page">
            <HomeBlock1 />
            <HomeBlock2 />
            <HomeBlock3 />
        </div>
    )
}