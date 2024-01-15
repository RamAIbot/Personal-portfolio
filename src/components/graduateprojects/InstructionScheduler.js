import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import InstructionFile from "../../assets/pdffiles/Instruction_scheduler_project.pdf";

export const InstructionScheduler = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Dynamic Instruction Scheduler - OOO super-scalar processors</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project is dedicated to crafting a dynamic instruction scheduler that showcases the functionality of out-of-order processors, specifically utilizing the Tomasulo algorithm. Executed as a pivotal component of the Microprocessor Architecture course (ECE 563) at North Carolina State University, this initiative aims to provide a hands-on exploration of the complexities involved in enhancing processor performance through dynamic instruction scheduling.</p>
                        <a href="https://github.com/RamAIbot/Dynamic-instruction-scheduler.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={InstructionFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}