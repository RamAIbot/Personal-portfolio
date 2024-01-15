import {AINavbar} from "./AINavbar";
import highware_img from '../../assets/images/high_img.jpeg'

export const Highway = () => {
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
                        <h1>Highway driving</h1>
                        <p style={{textAlign:'left'}}>The project focuses on path planning for the self driving car in Highways. The project uses sensor fusion to get the data about its surrounding vehicles. A behaviour planner is used to estimate the best state at any given time based on the sensor fusion data, car's position and map's data. It uses a finite state machine to find out the next state based on the particular behaviour. The trajectory generator generates various trajectories at a given time based on the state output of the behaviour planner and uses a cost function to select the best trajectory at a given time. The output of the trajectory planner is given to motion control system to implement the trajectory. Here we assume that the car implements the behavior without any error as given by the output of the trajectory planner (like the car moves 10m forward if planner sent that without any error), so we don't use a controller here.</p>
                        <a href="https://github.com/RamAIbot/Self_Driving_car_Highway_driving.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Autonomous driving</h4>
                        <img src={highware_img} alt="ekf1" style={{width:"100%",height:"100%"}}/>
                    </div>

                </div>


            </div>

        </div>
    )
}