import "./HomeBlock2.css";

import motor from "../../assets/home_block2/category-motor.png"
import gear from "../../assets/home_block2/category-gear.png"
import parts from "../../assets/home_block2/category-parts.png"

function Category({ txt, img, side, name }) {

    if (side == "R") {
        return (
            <div className="category-left">

                <img className="category-img" src={img} />

                <div className="txt-side">

                    <div className="category-title"> {name} </div>

                    <div className="category-txt"> {txt}</div>

                    <button className="shop-button"> SHOP </button>

                </div>

            </div>


        )
    }

    return (
        <div className="category-right">

            <div className="txt-side">

                <div className="category-title"> {name} </div>

                <div className="category-txt"> {txt}</div>

                <button className="shop-button"> SHOP </button>

            </div>

            <img className="category-img" src={img} />

        </div>
    )

}

export function HomeBlock2() {
    const txt = `mooooootori mooooootori moootori moooootori motori moooootori mooooootori mooooootori moootori moooootori motori moooootori 
    mooooootori mooooootori moootori moooootori motori moooootori mooooootori mooooootori moootori moooootori motori moooootori
    mooooootori mooooootori moootori moooootori motori moooootori mooooootori mooooootori moootori `

    return (
        <div className="Home-Block2">
            <div className="categorys-container">

                <Category txt={txt} name="MOTOR" side="L" img={motor} />
                <Category txt={txt} name="GEAR" side="R" img={gear} />
                <Category txt={txt} name="PARTS" side="L" img={parts} />
                <Category txt={txt} name="MOTOR" side="R" img={motor} />

            </div>
        </div>
    );
}