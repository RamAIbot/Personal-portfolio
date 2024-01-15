import {AINavbar} from "./AINavbar";


export const BehaviouralClone = () => {
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
                        <h1>Behavioral Cloning</h1>
                        <p style={{textAlign:'left'}}>The project focuses on training the car how to steer a car in road by cloning the behaviour of the driver. The train set is collected with different images from the car's cameras and the corresponding driver's action on the steering wheel. The data is collected from the car driven in the Udacity's simulation environment consisting of 2 tracks one with basic curves and other with very much advanced curves and lanes. A suitable deep learning model is used to clone the behavior and finally the model is testing in the simulation environment to drive autonomously by controlling the steering angle alone with constant speed.</p>
                        <a href="https://github.com/RamAIbot/Self_Driving_car_Behavioral_Cloning.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <p>Note : The simulator is working on lower resolution compared to the screen resolution on Youtube, so the video can be much blurry in full screen.</p>
                    <div className="col-sm">
                        <h4>Model Run - Environment 1 </h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/GMIWqt_o8lE?si=c2BgHXPMN4h-qUXE" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                    <div className="col-sm">
                        <h4>Model Run - Environment 2 - Complex environment</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/zdkMcOcA0fw?si=N-ygBd9YBTrP__eZ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>


            </div>

        </div>
    )
}