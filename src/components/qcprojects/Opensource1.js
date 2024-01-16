import {QCNavbar} from "./QCNavbar";
import Qosf_report from "../../assets/pdffiles/Status report.pdf";

export const Opensource1 = () => {
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
                        <h1>Open Source - QuNetSim - Implementation of BB84 protocol.</h1>
                        <p style={{textAlign:'left',background:"black"}}>QuNetSim (Quantum Network Simulator) is a Python based simulation framework for quantum networking simulations. The intended use is that one can develop and test applications and protocols designed for quantum networks on the network and application layer that can transmit and store quantum information.</p>
                        <p style={{textAlign:'left',background:"black"}}>BB84 stands as a formidable secure communication protocol, offering a glimpse into the potential of quantum networks for enhanced security. Consider two individuals, Alice and Bob, seeking to communicate securely over a network, such as the internet. Utilizing a method called a "one-time pad," Alice and Bob could ensure secure communication if they could agree upon a "secret key" — a randomly generated string of 0s and 1s — in advance. Leveraging a quantum network, Alice and Bob can establish a secret key with the assurance that no eavesdroppers, like Eve, are intercepting their confidential communication. The robust security provided by BB84 showcases the power of quantum networks in mitigating the vulnerabilities associated with classical communication methods.</p>
                        <p style={{textAlign:'left',background:"black"}}>The project is done as a part of Unitary Hack.</p>

                        <a href="https://github.com/RamAIbot/QuNetSim/blob/add-bb84-protocol/examples/BB84/BB84_protocol.py"><button type="button" className="btn btn-outline-light" >GitHub</button></a>
                    </div>
                </div>
                <br/>
                

            </div>

        </div>
    )
}