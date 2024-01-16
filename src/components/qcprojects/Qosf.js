import {QCNavbar} from "./QCNavbar";
import Qosf_report from "../../assets/pdffiles/Status report.pdf"

export const Qosf = () => {
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
                        <h1>Quantum Open Source Foundation Mentorship Program - 2023</h1>
                        <p style={{textAlign:'left',background:"black"}}>The project focuses on performing
                            error correction to Discrete
                            Variable Photonic Quantum
                            Computing - Perceval Framework.</p>
                        <p style={{textAlign:'left',background:"black"}}>The second part of the project is to
                            develop a Photonic version of the
                            QAOA algorithm in the Perceval
                            Framework</p>
                        <p style={{textAlign:'left',background:"black"}}>The project was done under the guidance of Mentor Mr. Victor Onofre.</p>

                        <a href="https://github.com/RamAIbot/QOSF_errormitigation.git"><button type="button" className="btn btn-outline-light" >GitHub</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={Qosf_report} width="1000px" height="700px" />
                    </div>

                </div>

            </div>

        </div>
    )
}