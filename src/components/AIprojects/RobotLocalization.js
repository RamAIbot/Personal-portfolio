import {AINavbar} from "./AINavbar";

import lo1 from "../../assets/images/lo1.jpeg"
import lo2 from "../../assets/images/lo2.jpeg"
import lo3 from "../../assets/images/lo3.jpeg"
import lo4 from "../../assets/images/lo4.jpeg"

export const RobotLocalization = () => {
    return (
        <div className="ai_project_robotics">
            <AINavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Robotic Localization using Adaptive Monte Carlo localization</h1>
                        <p style={{textAlign:'left'}}>The project uses adaptive monte carlo localization to determine the location of the robot with respect to the surroundings. Initially the particles will be diverged. Once when robot starts to move it converges to present position of the robot. The project uses amcl package of ROS for achiving the same. The robot model uses hokuyo lidar as rangefinder. the project also contains a camera and a separate package ballchaser to follow white ball alone. Rviz tool is used to subscribed to get the camera and lidar measurements. Additionally the robot can be moved using teleop twist keyboard and particle convergence can be seen.</p>
                        <a href="https://github.com/RamAIbot/Udacity-WhereamI.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h5>AMCL initial stage where the particles are dispersed</h5>
                        <img src={lo1} alt="lo1" style={{width:"100%",height:"100%"}}/>
                    </div>

                    <div className="col-sm">
                        <h5>ROS 3D world</h5>
                        <img src={lo2} alt="lo2" style={{width:"100%",height:"100%"}}/>
                    </div>

                </div>
                <br/>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h5>Localization in Rviz (Particles are converged)</h5>
                        <img src={lo3} alt="lo3" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className="col-sm">
                        <h5>Movement using 2D Nav Goal</h5>
                        <img src={lo4} alt="lo4" style={{width:"100%",height:"100%"}}/>
                    </div>
                </div>


            </div>

        </div>
    )
}