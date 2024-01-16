import {QCNavbar} from "./QCNavbar";

export const AmpEmbedding = () => {
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
                        <h1>Amplitude embedding preparation - HAQS QOSF 2022</h1>
                        <p style={{textAlign:'left',background:"black"}}>A quantum embedding represents classical data as quantum states in a Hilbert space via a quantum feature map. It takes a classical datapoint and translates it into a set of gate parameters in a quantum circuit, creating a quantum state.</p>
                        <p style={{textAlign:'left',background:"black"}}>In the amplitude-embedding technique, data is encoded into the amplitudes of a quantum state. </p>

                        <a href="https://github.com/RamAIbot/Qosf_cohort7_task.git"><button type="button" className="btn btn-outline-light" >GitHub</button></a>

                    </div>
                </div>


            </div>

        </div>
    )
}