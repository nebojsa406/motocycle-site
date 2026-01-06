import "./HomeBlock4.css";
import logoImg from "../../assets/logo.png";
import facebookImg from "../../assets/home_block4/facebook-footer-icon.png";
import instagramImg from "../../assets/home_block4/instagram-footer-icon.png";
import twitterImg from "../../assets/home_block4/twitter-footer-icon.png";
import youtubeImg from "../../assets/home_block4/youtube-footer-icon.png";

export function HomeBlock4() {
    return (
        <div className="Home-Block4">

            <div className="footer-top">
                <div className="rider-supply-container">
                    <div className="footer-img-container">
                        <img className="footer-img" src={logoImg} alt="" />
                    </div>
                    <div className="rider-supply-p-container">
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
                    <div className="quick-link-h1-container">
                        <h1>QUICK LINKS</h1>
                    </div>
                    <div className="quick-link-a-container">
                        <a href="">Bikes</a>
                        <a href="">Gear</a>
                        <a href="">Parts</a>
                        <a href="">Accessories</a>
                    </div>
                </div>


                <div className="support-container">
                    <div className="support-h1-container">
                        <h1>SUPPORT</h1>
                    </div>
                    <div className="support-a-container">
                        <a href="">Shipping</a>
                        <a href="">Warranty</a>
                        <a href="">FAQ</a>
                        <a className="long-a" href="">Terms of Service / Returns Policy</a>
                    </div>
                </div>

                <div className="news-letter-container">
                    <div className="news-letter-h1-container">
                        <h1>NEWSLETTER</h1>
                    </div>
                    <div className="news-letter-email-container">
                        <p className="sign-up-text">
                            Sign up for Exclusive offers and updates
                        </p>
                        <div className="email-input-btn-container">
                            <input className="email-input" type="text" placeholder="Enter your email here" />
                            <button className="sub-btn">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>© 2026 Rider Supply. All rights reserved.</p>
            </div>

        </div>
    );
}