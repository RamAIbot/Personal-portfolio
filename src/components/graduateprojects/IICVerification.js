import {ProjectNavbar} from "./ProjectNavbar";
import ConvprojectFile from "../../assets/pdffiles/Convolution_project.pdf";

export const IICVerification = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>I2C Verification - Layered test bench architecture using System Verilog.</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">The project focuses on developing a System Verilog-based test-bench architecture to verify the functionality of the I2C module. Guided by Dr. Bob Oden, a pioneer in the field of design verification, the project involves testing the I2C controller in both read and write modes for a specific address. The test plan includes consecutive reads, consecutive writes, alternative read and writes, as well as testing the registers, controllers, and other internal elements. The project achieves an overall code and functional coverage of 90%.
                        </p>

                        <p className="project_text_class">The project development was closely monitored by the professor, and it was graded based on the coverage and verification plan. Please reach out for further information.</p>

                    </div>
                </div>

            </div>

        </div>
    )
}