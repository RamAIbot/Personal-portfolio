import {AINavbar} from "./AINavbar";
import map1 from "../../assets/images/mapping1.jpeg";
import map2 from "../../assets/images/mapping2.jpeg";


export const RoboticMapping = () => {
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
                        <h1>Robotic Mapping</h1>
                        <p style={{textAlign:'left'}}>The project uses Occupancy Grid Mapping algorithm to map the surfaces. The robot uses a Continuous Bag of Words model to determine the important features of the images. The images are obtained using a depth camera. The rtabmapping package of ROS is enables the robot to estimate the map of its environment. The algorithm generates the map based on the loop closures. The robot is moved through turtle bot teleop twist keyboard in the environment made in Gazebo. Here the robot has made three loop closures to map the environment.</p>
                        <a href="https://github.com/RamAIbot/Udacity-MapMyWorld.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h5>ROS 3D world</h5>
                        <img src={map1} alt="lo1" style={{width:"100%",height:"100%"}}/>
                    </div>

                    <div className="col-sm">
                        <h5>3D Mapping</h5>
                        <img src={map2} alt="lo2" style={{width:"100%",height:"100%"}}/>
                    </div>

                </div>

            </div>

        </div>
    )
}