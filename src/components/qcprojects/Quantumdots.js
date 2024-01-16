import {QCNavbar} from "./QCNavbar";
import QNLP_pitch from "../../assets/pdffiles/QNLP_Pitch.pdf";

export const Quantumdots = () => {
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
                        <h1>Design of a 1-bit half and full subtractor using a quantum-dot cellular automata (QCA).</h1>
                        <p style={{textAlign:'left',background:"black"}}>Both quantum-dot cellular automata (QCA) and reversible logic are emerging technologies that are promising alternatives to overcoming the scaling and heat dissipation issues, respectively, in the current CMOS designs. Here the fundamentals of QCA are studied; based on these a modified version of half subtractor and full subtractor are designed and their outputs are tested using QCA designer simulation software. The proposed design of the QCA-based half and full subtractor has an area of 0.06 μm 2 and 0.10 μm 2 respectively which is better to those conventional subtractors occupying an area of 0.13 μm 2 and 0.17 μm 2 respectively. Also this modified half and full subtractor has 38 and 83 cells respectively while the conventional half and full subtractor has 93 and 122 cells respectively. The half and full subtractor are made using 5 input majority gate along with the combination of basic gates.</p>
                        <h5>DOI: 10.1109/ICPCSI.2017.8392132</h5>

                        <a href="https://ieeexplore.ieee.org/document/8392132"><button type="button" className="btn btn-outline-light" >Publication</button></a>

                    </div>
                </div>

            </div>

        </div>
    )
}