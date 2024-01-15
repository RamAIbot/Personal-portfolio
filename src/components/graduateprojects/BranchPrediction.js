import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import BranchPredFile from "../../assets/pdffiles/Branch_project.pdf";

export const BranchPrediction = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Branch Predictor Performance modeling</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project is dedicated to modeling the behavior of branch predictors and conducting a thorough analysis of their performance. Executed as an integral component of the Microprocessor Architecture course (ECE 563) at North Carolina State University, this undertaking aims to delve into the complexities of branch prediction algorithms and assess their impact on overall microprocessor performance.</p>
                        <a href="https://github.com/RamAIbot/Branch-predictor.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={BranchPredFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}