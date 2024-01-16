import {QCNavbar} from "./QCNavbar";
import QIS from "../../assets/pdffiles/QIS302_syllabus.pdf";

export const Qhardware = () => {
    return (
        <div className="qc_project">
            <QCNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>C2QA QIS 302: A Practical Guide to Superconducting Qubit Experiments Summer Program.</h1>
                        <p style={{textAlign:'left',background:"black"}}>The Virtual Quantum Computing Summer School was conducted as a part of Co-design Center for Quantum Advantage (C2QA).</p>

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={QIS} width="1000px" height="700px" />
                    </div>
                </div>

            </div>

        </div>
    )
}