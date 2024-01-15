
import lane1 from "../../assets/images/lane1.jpg";
import laner2 from "../../assets/images/lane2.jpeg";

import {AINavbar} from "./AINavbar";

export const Lanedetection = () => {
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
                    <h1>Lane Detection Project using OpenCV</h1>
                    <p style={{textAlign:'left'}}>The project focuses on lane detection in images as well as in video using OpenCV. The pipeline for lane detection is as follows:</p>

                    <ol style={{textAlign:'left'}}>
                        <li>The color image or the video frame is converted into grayscale.</li>
                        <li>A Gaussian Blur is applied to the image with a kernel size of 5x5.</li>
                        <li>The Canny edge detection algorithm is applied to find edges in the image, utilizing gradients.</li>
                        <li>Threshold values are chosen between 50 and 150.</li>
                        <li>The image is cropped to focus on the road section, eliminating sky areas.</li>
                        <li>The OpenCV fillPoly function is used to create a mask of the road surface, then bitwise ANDed with the Canny image.</li>
                        <li>Edges of the roads are obtained, and nearby edges are connected to get the lanes.</li>
                        <li>The Hough transform is used to detect lines with the following parameters:</li>
                        <ul>
                            <li>rho = 2</li>
                            <li>theta = π/180</li>
                            <li>thresh = 36</li>
                            <li>min_line_length = 38</li>
                            <li>max_line_gap = 43</li>
                        </ul>
                    </ol>

                    <a href="https://github.com/RamAIbot/Self_Driving_car_Lanedetection.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                </div>
            </div>
            <br/>
            <div className="row">
                <div className="col-sm">

                    <div className="row">
                        <div className="col-sm">
                            <img src={lane1} alt="rca1" style={{width:"100%",height:"100%"}}/>
                        </div>

                        <div className="col-sm">
                            <img src={laner2} alt="rca2" style={{width:"100%",height:"100%"}}/>
                        </div>

                    </div>
                </div>
            </div>


        </div>

    </div>
    )
}