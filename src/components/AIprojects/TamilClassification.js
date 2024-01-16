import {AINavbar} from "./AINavbar";

export const TamilClassification = () => {
    return (
        <div className="ai_project_coding">
            <AINavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Tamil character classification - Kaggle (PadhAI)</h1>
                        <p style={{textAlign:'left',background:"black",padding:"30px"}}>The project was undertaken as a challenge on Kaggle for the Deep Learning course offered by PadhAI. The primary objective is to classify images containing Tamil characters, along with unnecessary backgrounds, into their corresponding classes using Convolutional Neural Networks (CNNs). The model is then tested with a different test set through Kaggle automation.</p>

                        <p style={{textAlign:'left',background:"black",padding:"30px"}}>This project is a part of a three-phase course project, which involves converting images to the text representation of Tamil and Hindi text plates and translating them into English. The first phase employs an object detection model to identify the text plate within the image. Following this, the above-mentioned project is implemented to classify the detected plate into various classes. The final stage utilizes a Recurrent Neural Network (RNN) model to translate the text into English.</p>


                        <a href="https://www.kaggle.com/code/ramachandranss/pytorch-dataloader-code-e98692/notebook"><button type="button" className="btn btn-outline-light" >Kaggle</button></a>

                    </div>
                </div>


            </div>

        </div>
    )
}