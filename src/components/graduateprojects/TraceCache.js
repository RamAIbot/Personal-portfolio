import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import TCacheprojectFile from "../../assets/pdffiles/trace_project.pdf";

export const TraceCache = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Trace cache Performance modeling</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project is dedicated to the performance modeling for a trace cache, employing the advanced capabilities of 721 Sim. Executed as a significant reserach project for ECE 721 at North Carolina State University, this endeavor aims to delve into the nuances of trace cache architecture and leverage simulation tools for comprehensive performance analysis.</p>
                        <a href="https://github.com/RamAIbot/Trace_cache.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={TCacheprojectFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}