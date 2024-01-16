import {QCNavbar} from "./QCNavbar";
import QNLP_pitch from "../../assets/pdffiles/QNLP_Pitch.pdf";

export const HaqsQML = () => {
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
                        <h1>Quantum Machine learning - VQL and Kernel methods - HAQS 2022</h1>
                        <p style={{textAlign:'left',background:"black"}}>In this challenge, you will use Pennylane and Amazon Braket to implement a variational quantum classifier (VQC) to take on a supervised learning problem based on the work of Havlíček et al. (2018). Construct and train a QML model to solve the binary classification task. </p>
                        <p style={{textAlign:'left',background:"black"}}>For the first leg of the QML challenge, you implemented a variational quantum classifier (VQC) to take on a supervised learning problem based on the work of Havlicek et al. (2018). Now, you will build on that experience, and explore Havlicek et al.'s second proposed method of applying quantum-enhanced feature spaces to machine learning: the quantum kernel estimator. In this challenge continuation, you will construct a QML model that estimates a kernel function using a quantum computer and optimize a classical support vector machine (SVM). For this classification protocol, we will continue to restrict ourselves to the binary label case.</p>


                        <a href="https://github.com/RamAIbot/HAQS-2022/tree/Reverse_chandelier"><button type="button" className="btn btn-outline-light" >GitHub</button></a>

                    </div>
                </div>
                <br/>


            </div>

        </div>
    )
}