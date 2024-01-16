import {QCNavbar} from "./QCNavbar";
import QNLP_pitch from "../../assets/pdffiles/QNLP_Pitch.pdf";

export const QNLP = () => {
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
                        <h1>Quantum Natural Language Processing - Womanium Hackathon 2022.</h1>
                        <p style={{textAlign:'left',background:"black"}}>Quantum Natural Language Processing (QNLP) is a very young area of research, aimed at
                            the design and implementation of NLP models that exploit certain quantum phenomena
                            such as superposition, entanglement, and interference to perform language-related tasks on
                            quantum hardware.</p>
                        <p style={{textAlign:'left',background:"black"}}>The dataset consists of 100 sentence pairs. Each
                            short sentence falls into one of two categories: Either IT or food.</p>
                        <p style={{textAlign:'left',background:"black"}}>The goal of the project is to write, train and test a simple QNLP model that, given two
                            sentences, can detect whether they belong to the same category or not. In order to achieve
                            the goal you will need to find a suitable quantum representation of each sentence and a way
                            to compare their similarity.</p>

                        <a href="https://github.com/RamAIbot/Quantum-Natural-Language-Processing-with-lambeq---Quantinuum.git"><button type="button" className="btn btn-outline-light" >GitHub</button></a>

                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={QNLP_pitch} width="1000px" height="700px" />
                    </div>
                </div>

            </div>

        </div>
    )
}