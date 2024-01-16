import {QCNavbar} from "./QCNavbar";
import fujitsu_report from "../../assets/pdffiles/fujitsu_report.pdf"


export const FuProject = () => {
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
                        <h1>Quantum Machine Learning - Fujitsu Quantum Simulator challenge 2023.</h1>

                        <p style={{textAlign:'left',background:"black"}}>Our project applies Quantum Computing, and specifically Quantum Machine Learning (QML), to three aspects of AD intervention. The three aspects are summarized below and elaborated in the three technical sections of this report. The project was done under the guidance of Dr. Eric Rotenberg.</p>

                        <h5 >Section 2: Detect AD in its Early Stages</h5>
                        <p style={{textAlign:'left',background:"black"}}>Methodology used for this part: we explored various hybrid classical-quantum ML models using the Google Colab cloud computing service.</p>

                        <h5>Section 3: Identify Drugs for Slowing Down AD Impact</h5>
                        <p style={{textAlign:'left',background:"black"}}>Methodology used for this part: we explored quantum ML circuits using the Fujitsu Quantum Simulator.</p>

                        <h5>Section 4: Discover New Drugs for AD using Quantum GANs</h5>
                        <p style={{textAlign:'left',background:"black"}}>Methodology used for this part: we explored quantum ML circuits using the Fujitsu Quantum Simulator.</p>

                    </div>
                </div>

                <div className="row">
                    <div className="col-sm">
                        <embed src={fujitsu_report} width="1000px" height="700px" />
                    </div>
                </div>


            </div>

        </div>
    )
}