import "./HomeBlock3.css";

import motor1 from "../../assets/home_block3/BMW-S1000RR.png"
import motor2 from "../../assets/home_block3/honda-CBR1000RR.png"
import motor3 from "../../assets/home_block3/kawasaki-H2R.png"
import motor4 from "../../assets/home_block3/kawasaki-NINJA-ZX-10R.png"
import motor5 from "../../assets/home_block3/yamaha-R1.png"

import gear1 from "../../assets/home_block3/gear-helmet.png"
import gear2 from "../../assets/home_block3/gear-chest.png"
import gear3 from "../../assets/home_block3/gear-gloves.png"
import gear4 from "../../assets/home_block3/gear-pants.png"
import gear5 from "../../assets/home_block3/gear-boots.png"
import gear6 from "../../assets/home_block3/gear-hoodie.png"

import ItemCard from "../ItemCard.jsx"


export function HomeBlock3() {

    return (
        <div className="Home-Block3">

            <div className="top-txt"> POPULAR </div>

            <div className="row">

                <ItemCard name={"BMW S1000RR"} price={"10 000"} img={motor1} />
                <ItemCard name={"CBR1000RR"} price={"10 000"} img={motor2} />
                <ItemCard name={"kawasaki-H2R"} price={"10 000"} img={motor3} />
                <ItemCard name={"NINJA-ZX-10R"} price={"10 000"} img={motor4} />
                <ItemCard name={"yamaha-R1"} price={"10 000"} img={motor5} />
                <ItemCard name={"kawasaki-H2R"} price={"10 000"} img={motor3} />
                <ItemCard name={"BMW S1000RR"} price={"10 000"} img={motor1} />
                <ItemCard name={"CBR1000RR"} price={"10 000"} img={motor2} />
                <ItemCard name={"kawasaki-H2R"} price={"10 000"} img={motor3} />
                <ItemCard name={"NINJA-ZX-10R"} price={"10 000"} img={motor4} />
                <ItemCard name={"yamaha-R1"} price={"10 000"} img={motor5} />
                <ItemCard name={"kawasaki-H2R"} price={"10 000"} img={motor3} />

            </div>

            <div className="row">

                <ItemCard name={"helmet"} price={"1000"} img={gear1} />
                <ItemCard name={"chest"} price={"1000"} img={gear2} />
                <ItemCard name={"gloves"} price={"1000"} img={gear3} />
                <ItemCard name={"legs"} price={"1000"} img={gear4} />
                <ItemCard name={"boots"} price={"1000"} img={gear5} />
                <ItemCard name={"hoodie"} price={"1000"} img={gear6} />
                <ItemCard name={"helmet"} price={"1000"} img={gear1} />
                <ItemCard name={"chest"} price={"1000"} img={gear2} />
                <ItemCard name={"gloves"} price={"1000"} img={gear3} />
                <ItemCard name={"legs"} price={"1000"} img={gear4} />
                <ItemCard name={"boots"} price={"1000"} img={gear5} />
                <ItemCard name={"hoodie"} price={"1000"} img={gear6} />

            </div>
        </div>
    );
}