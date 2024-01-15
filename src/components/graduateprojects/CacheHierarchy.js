import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import {Col, Container, Row} from "react-bootstrap";
import {Document, Page} from "react-pdf";
import CacheprojectFile from '../../assets/pdffiles/Cache_project.pdf'

export const CacheHierarchy = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Cache Hierarchy Performance modeling</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project centers around the creation of an advanced simulator designed to replicate the intricate behavior of the L1, L2, and Victim caches, enabling a thorough performance analysis. Conceived as a crucial component of the Microprocessor Architecture course (ECE 563) at North Carolina State University, this endeavor seeks to provide valuable insights into cache dynamics and their impact on overall system performance.</p>
                        <a href="https://github.com/RamAIbot/cache-emulator.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={CacheprojectFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}