import {QCNavbar} from "./QCNavbar";

export const IgemHypo2 = () => {
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
                        <h1>iGEM 2023 - Dry Lab - Hypothesis 2 </h1>
                        <p style={{textAlign:'left',background:"black"}}>This is the first team from North Carolina State University to participate and present in iGEM competition. The Dry lab portion was mentored by Dr. Eric Rotenberg. The QC access was provided by the NC State Quantum Hub to test the experiments.</p>
                        <p style={{textAlign:'left',background:"black"}}>The project focuses on using QML to classify Acetylcholinesterase inhibitor drug targets in Alzheimer’s disease.</p>
                        <p style={{textAlign:'left',background:"black"}}>The Hypothesis 2 is divided into two section - Drug target classification (Hypo2.1) and Drug molecule Generation (Hypo2.2).</p>
                        <h5>For more details please visit the below iGEM 2023 website linked below</h5>
                        <a href="https://2023.igem.wiki/ncsu/hypo21"><button type="button" className="btn btn-success" >iGEM2023</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Project Promotion video</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/4ryetV03MYI?si=b_bMOlvN8v57q8a3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>

            </div>

        </div>
    )
}