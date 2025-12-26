import "./MotorcyclePage.css"
import ItemCard from "../components/ItemCard.jsx"

import motor1 from "../assets/home_block3/BMW-S1000RR.png"
import motor2 from "../assets/home_block3/honda-CBR1000RR.png"
import motor3 from "../assets/home_block3/kawasaki-H2R.png"
import motor4 from "../assets/home_block3/kawasaki-NINJA-ZX-10R.png"
import motor5 from "../assets/home_block3/yamaha-R1.png"

import filterIcon from "../assets/filter-icon.png"

export function MotorcyclePage() {
    return (
        <div className="motorcycles-page">

            <div className="top-category-name">
                motorcycles
            </div>

            <div className="filter-sort-container">

                <button className="filter-button">
                    <img className="filter-button-img" src={filterIcon} />
                </button>

                <div className="sorting"> sort by </div>

            </div>


            <div className="card-container">
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

        </div>
    )
}