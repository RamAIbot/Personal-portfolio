import {AINavbar} from "./AINavbar";
import traffic_sign from "../../assets/images/trafficsign_img.png"
export const Traffic = () => {
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
                        <h1>Traffic Sign Classification</h1>
                        <p style={{textAlign:'left'}}>The project focuses on developing a classfier to classify the traffic sign boards. We use the dataset from German traffic signs to train the classifier. The classifier uses the Lenet Architecuture to perform the classification task. The accuracy of the train set is 99.93%, for evaluation set it is 93.33%. The model has an accuracy of 92.20% for the images in the test which was not known to the model while training. For web based random images the accuracy 66.66%</p>

                        <a href="https://github.com/RamAIbot/Self_Driving_car_Traffic_Sign_classifier.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                       <h4>The Confusion matrix after training </h4>
                        <img src={traffic_sign} alt="traffic_sign" style={{width:"100%",height:"100%"}}/>
                    </div>
                </div>


            </div>

        </div>
    )
}