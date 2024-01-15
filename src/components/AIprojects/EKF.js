import {AINavbar} from "./AINavbar";
import ekf1 from "../../assets/images/ekf1.jpeg"
import ekf2 from "../../assets/images/ekf2.jpeg"

export const EKF = () => {
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
                        <h1>Sensor Fusion - Kalman Filters</h1>
                        <p style={{textAlign:'left'}}>The project focuses using the sensor fusion technique to estimate the position of vehicle (in this case a bicycle) and also the velocity of the vechile in both x and y directions. The sensors used here are RADAR and LiDAR. RADAR sensors are useful for measuring the velocity and direction of the movement of the object. Similarily LiDAR is used to measure the x and y position of the object. So we fuse both these sensors to get the estimate of x & y position and x & y direction velocity. The sensors have noise in their readings and so we need to process it to get accurate position and velocity which is the key for the self driving car. Here we use the Kalman filter approch to provide estimation of the moving object.</p>
                        <a href="https://github.com/RamAIbot/Self_Driving_car_SensorFusion_Kalman_filters.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <h5>The result of sensor fusion estimation for dataset 1 is given below. The LiDAR measurements are red circles, RADAR measurements are blue circles with an arrow pointing in the direction of the observed angle, and estimation markers are green triangles.</h5>
                    <div className="col-sm">
                        <h4>Dataset - 1 </h4>
                        <img src={ekf1} alt="ekf1" style={{width:"100%",height:"100%"}}/>
                    </div>
                    <div className="col-sm">
                        <h4>Dataset - 2</h4>
                        <img src={ekf2} alt="ekf2" style={{width:"100%",height:"100%"}}/>
                    </div>
                </div>


            </div>

        </div>
    )
}