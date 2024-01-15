import {AINavbar} from "./AINavbar";
import local1 from "../../assets/images/local1.jpeg";
import local2 from "../../assets/images/local2.jpeg";

export const Vehiclelocalization = () => {
    return (
        <div className="ai_project">
            <AINavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Vehicle Localization - Particle Filters</h1>
                        <p style={{textAlign:'left'}}>The project focuses on solving the kidnapped vehicle problem using the Particle filters approach in a map which contains many poles placed in random locations. The robot is placed with sensors which measures the distance from the robot and the nearest poles with the sensor range. The robot doesn't match any reading with the corresponding poles. It gives the overall observations within the sensor range as input to the filter.We also provide the car's velocity and yaw rate with respect to x axis as the input for prediction step. Initially to get the robot's initial position and orientation we use the GPS measurement with some Gaussian noise as the first input. We use the bicycle motion model to predict the motion of particles as the vehicle moves. The bicycle motion model is the simple approximation of the vehicle,hence it is used.</p>
                        <a href="https://github.com/RamAIbot/Self_Driving_car_Kidnapped_vehicle_localization.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Initial stage </h4>
                        <img src={local1} alt="ekf1" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className="col-sm">
                        <h4>Final stage</h4>
                        <img src={local2} alt="ekf2" style={{width:"100%",height:"100%"}}/>
                    </div>
                </div>


            </div>

        </div>
    )
}