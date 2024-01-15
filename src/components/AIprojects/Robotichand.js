import {AINavbar} from "./AINavbar";
import arm1 from "../../assets/images/arm1.jpeg"
import arm2 from "../../assets/images/arm2.jpeg"

export const Robotichand = () => {
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
                        <h1>Simple Arm mover in gazebo</h1>
                        <p style={{textAlign:'left'}}>Uses the simple arm ROS package to make a robot model with 2 joints. The catkin package structure is used here along with gazebo engine.</p>
                        <p style={{textAlign:'left'}}>Initially when the robot's joints (2 joints) is in 0,0 radians angle, the camera points to the sky og the environment. Whenever the camera points to sky (Uniform pixels (gray) in image) and arm is not moving the GoToPosition service is called and the Arm is moved 90 degress or 1.57 radians in both joints. Now the camera can clearly see the dice infront of the robot.</p>
                        <a href="https://github.com/RamAIbot/Udacity-Arm_mover.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <img src={arm1} alt="arm1" style={{width:"100%",height:"100%"}}/>
                    </div>

                    <div className="col-sm">
                        <img src={arm2} alt="arm2" style={{width:"100%",height:"100%"}}/>
                    </div>


                </div>


            </div>

        </div>
    )
}