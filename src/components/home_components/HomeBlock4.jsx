import "./HomeBlock4.css";
import logoImg from "../../assets/logo.png";
import facebookImg from "../../assets/home_block4/facebook-footer-icon.png";
import instagramImg from "../../assets/home_block4/instagram-footer-icon.png";
import twitterImg from "../../assets/home_block4/twitter-footer-icon.png";
import youtubeImg from "../../assets/home_block4/youtube-footer-icon.png";

export function HomeBlock4() {
    return (
        <div className="Home-Block4">

            
            <div className="rider-supply-container">
                <div className="footer-img-container">
                    <img className="footer-img" src={logoImg} alt="" />
                </div>
                <div className="left-p-container">
                    <p>Premium gear</p>
                    <p>Built for riders</p>
                </div>
                <div className="media-icons-container">
                    <a href="">
                        <img className="facebook-img" src={facebookImg} alt="" />
                    </a>
                    <a href="">
                        <img className="instagram-img" src={instagramImg} alt="" />
                    </a>
                    <a href="">
                        <img className="twitter-img" src={twitterImg} alt="" />
                    </a>
                    <a href="">
                        <img className="youtube-img" src={youtubeImg} alt="" />
                    </a>
                </div>
            </div>

            <div className="quick-link-container">
                <div className="h1-container">
                    <h1>QUICK LINKS</h1>
                </div>
                <div className="p-container">
                    <a href="">Bikes</a>
                    <a href="">Gear</a>
                    <a href="">Parts</a>
                    <a href="">Accessories</a>
                </div>
            </div>

            <div className="support-container">
                <div className="h1-container">
                    <h1>SUPPORT</h1>
                </div>
                <div className="p-container">
                    <a href="">Shipping</a>
                    <a href="">Warranty</a>
                    <a href="">FAQ</a>
                    <a href="">Terms of Service / Returns Policy</a>
                </div>
            </div>


            {/* <div className="bottom-container">
                <p>© 2026 Rider Supplys. All rights reserved.</p>
            </div> */}

        </div>
    );
}