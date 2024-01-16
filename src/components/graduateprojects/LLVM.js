import {ProjectNavbar} from "./ProjectNavbar";
import BranchPredFile from "../../assets/pdffiles/Branch_project.pdf";

export const LLVM = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>LLVM IR based Compiler Development</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">The project focuses on developing an LLVM IR-based compiler frontend and performing various IR-based optimization techniques. The frontend comprises the parser and scanner, which convert the program written in a high-level language to LLVM-based IR. Now, the LLVM IR code is passed through various optimization layers that minimize the instructions needed for execution. It also addresses the inlining aspect of functions. These activities are part of three projects as subsections. The final backend layer, which manually converts LLVM IR to the specific machine code based on the architecture, is completed for development. The X86 architecture is utilized for the backend conversion here.</p>
                        <a href="https://github.com/RamAIbot/Complier-development.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>

            </div>

        </div>
    )
}