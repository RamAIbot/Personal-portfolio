import {AINavbar} from "./AINavbar";

export const SystemIntegration = () => {
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
                        <h1>Self Driving Car - System Integration</h1>
                        <p style={{textAlign:'left'}}>The project focusses on developing the complete architecture of a self driving car. The architecture includes four crucial subsystems. The Sensors subsystem,perception subsystem,planning subsystem and control subsystem. The output of the control subsystem is send to the Simulator based on Carla to test the result. The goal is to make the car follow a trajectory around an highway without violating the traffic rules and without causinn accidents.The system uses ROS as a backend to perform the task of the four subsystems and a simulator made in Unity as the front end to test the results.</p>

                        <a href="https://github.com/RamAIbot/Self_Driving_car_System_integration.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>System Integration - CARLA and ROS</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/EoCdNVOAKZE?si=FLotS17p6Y2NxidR" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>


                </div>


            </div>

        </div>
    )
}