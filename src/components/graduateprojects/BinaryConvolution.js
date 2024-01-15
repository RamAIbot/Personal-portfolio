import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import ConvprojectFile from "../../assets/pdffiles/Convolution_project.pdf";

export const BinaryConvolution = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>RTL design and Synthesis of Binary Convolution</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project is dedicated to the development of a synthesize Register-Transfer Level (RTL) module designed to perform binary convolution on input images. Executed as an integral component of the ASIC and FPGA Design course (ECE 564) at North Carolina State University, this initiative aims to explore efficient hardware design methodologies for accelerating binary convolution tasks.</p>
                        <a href="https://github.com/RamAIbot/Binary-Convolution-RTL.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={ConvprojectFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}