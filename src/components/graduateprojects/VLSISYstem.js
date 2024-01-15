import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import SramprojectFile from "../../assets/pdffiles/sram_project.pdf";

export const VLSISYstem = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>SRAM circuit design and layout</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project is dedicated to the meticulous design of a 128-bit (32x4) Static Random-Access Memory (SRAM), coupled with the intricate task of layout development using the powerful Synopsys Compiler. Executed as a significant undertaking, this initiative aims to explore the nuances of SRAM design and layout synthesis to meet performance and efficiency requirements.</p>
                        <a href="https://github.com/RamAIbot/SRAM_design.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={SramprojectFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}