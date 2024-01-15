import {AINavbar} from "./AINavbar";

export const Advancedlane = () => {
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
                        <h1>Advanced Lane Finding</h1>
                        <p style={{textAlign:'left'}}>The project is an advanced version of the previous lane detection algorithm which uses canny edges and Hough transform to detect lanes. The problem with the previous algorithm is that it fails to detect lanes of different curvature and lighting. This project makes is broken down into many steps to solve the lane detection problem. The general idea behind the project is that we first perform the lens correction, then we find out the lanes using Sobel operation and color spaces thresholding. Now after getting a binary warped image, we then make a perspective transform which is the bird's eye view of the road. Now we fit a second order polynomial to get the lane boundaries and mark the region inside the lane which is safe for the car to travel. We also find out the radius of curvature.</p>

                        <a href="https://github.com/RamAIbot/Self_Driving_car_AdvancedLanedetection.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/5F3VjHtTJyg?si=trOGZeObKqEYwfTv" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>


            </div>

        </div>
    )
}