import {AINavbar} from "./AINavbar";
import slam1 from "../../assets/images/slam1.jpeg";
import slam2 from "../../assets/images/slam2.jpeg";

export const SLAM = () => {
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
                        <h1>Home Service Robot using SLAM</h1>
                        <p style={{textAlign:'left'}}>The project focuses on autonomous navigation of a turtlebot robot to pick up an object in the environment and to drop it at the destination predefined in the environment. Here the environment consists of multiple rooms. The robot travels to the cafe room (the room at last with many tables) to pick up and object (maybe coffee) and deliver it to the conference room. The robot starts near the entrance of the room and moves towards pickup. The project is divided into various modules showcasing various functions.</p>
                        <ul style={{textAlign:'left'}}>
                            <li>SLAM modules which enables the robot to map the environment using SLAM</li>
                                <li>AMCL modules which enables the robot to perform localization in a map</li>
                                    <li>Pick Objects modules to move the robot between source and destination</li>
                                        <li>A demo marker modules for displaying markers which signify the object</li>
                                            <li>Home Service modules which show the complete system</li>
                        </ul>
                        <a href="https://github.com/RamAIbot/Udacity-HomeService.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h5>Autonomous navigation</h5>
                        <img src={slam1} alt="lo1" style={{width:"100%",height:"100%"}}/>
                    </div>

                    <div className="col-sm">
                        <h5>Reaching goal through autonomous navigation</h5>
                        <img src={slam2} alt="lo2" style={{width:"100%",height:"100%"}}/>
                    </div>

                </div>

            </div>

        </div>
    )
}