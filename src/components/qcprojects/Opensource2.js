import {QCNavbar} from "./QCNavbar";

export const Opensource2 = () => {
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
                            <h1>Open Source - Covalent - Distributed training of QML.</h1>
                            <p style={{textAlign:'left',background:"black"}}>Covalent, a Pythonic workflow tool tailored for computational scientists, AI/ML software engineers, and individuals managing workloads on constrained or costly computing resources, encompasses HPC clusters, GPU arrays, quantum computers, and cloud services.</p>
                            <p style={{textAlign:'left',background:"black"}}>This notebook draws inspiration from the Pennylane tutorial on variational quantum classifiers, demonstrating the seamless integration of Pennylane's Quantum Machine Learning (QML) capabilities with Covalent. The objective is to employ these tools to master the parity function.</p>
                            <p style={{textAlign:'left',background:"black"}}>This function yields 1 if                          �
                                x contains an odd number of 1's and 0's if x contains an even number of 1's.</p>
                            <p style={{textAlign:'left',background:"black"}}>The tutorial segment leverages the Iris Dataset, housing flower features essential for a classification task and corresponding flower names. Utilizing amplitude encoding to encode dataset features, the tutorial employs a Quantum Machine Learning model for effective classification.</p>

                            <a href="https://github.com/RamAIbot/covalent/blob/Parity_classifier/doc/source/tutorials/machine_learning/Covalent_pennylane_Iris_classification.ipynb"><button type="button" className="btn btn-outline-light" >GitHub - 1</button></a> <br/><br/>
                            <a href="https://github.com/RamAIbot/covalent/blob/Parity_classifier/doc/source/tutorials/machine_learning/Covalent_pennylane_Parity_classifier.ipynb"><button type="button" className="btn btn-outline-light" >GitHub - 2</button></a>
                        </div>
                    </div>
                    <br/>


                </div>

            </div>
        )
}