import {QCNavbar} from "./QCNavbar";

export const MZM = () => {
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
                        <h1>Mach Zehnder Modulator and Photodetector. </h1>
                        <p style={{textAlign:'left',background:"black"}}>The project involves the creation of a Mach-Zehnder modulator designed to transform electrical binary signals into light signals. This transformation is achieved by manipulating the light emitted from a laser source through the application of the Free Carrier Plasma dispersion effect. The modulated light then travels through a fiber optic cable and is subsequently detected by a photodetector. The photodetector is specifically engineered to adjust the corresponding bandwidth of the signal, effectively converting it back into electrical binary signals. The complete circuit, fabricated using AIM Education PDK, is integrated into a single photonic integrated circuit.</p>
                        <p style={{textAlign:'left',background:"black"}}>The report cannot be made public due to privacy reasons and so the final certificate from the program is attached</p>
                        <a href="https://courses.edx.org/certificates/36919bd877624c56ad120e8000447cf8"><button type="button" className="btn btn-outline-light" >Certificate</button></a>
                    </div>
                </div>
                <br/>


            </div>

        </div>
    )
}