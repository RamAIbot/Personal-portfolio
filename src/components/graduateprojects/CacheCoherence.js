import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import CoherenceprojectFile from "../../assets/pdffiles/cache_coherence_project.pdf";

export const CacheCoherence = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Cache Coherence Performance modeling</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project centers around the creation of a simulator tailored for the analysis of various cache coherence protocols, providing valuable insights into their performance within parallel computing environments. Executed as a crucial component of the Architecture of Parallel Computers course (ECE 506) at North Carolina State University, this initiative aims to unravel the complexities of cache coherence mechanisms and their impact on overall system efficiency.</p>
                        <a href="https://github.com/RamAIbot/Cache-coherence-emulation.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={CoherenceprojectFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}