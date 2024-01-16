import {HardwareNavbar} from "./HardwareNavbar";
import SIH_pdf from "../../assets/pdffiles/Early Warning Asthma Trigger Detection System.pdf"

export const SIH = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{background:"black",margin:"20px"}}>Asthma Trigger Detection: WINNER - Smart India Hackathon 2018 Hardware edition (5 day in person edition).</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p style={{background:'black'}} className="project_text_class">A	 non-invasive,	 wearable	 and	 easy	 to	 operate	 wireless	 system	 has	 been
                            developed	 to	 detect	 various	 environmental	 factors	 that	 trigger	 Asthma and
                            Chronic	Obstructive	Pulmonary	Disease	(COPD)	in	patients	and	provide	an	early
                            warning	 mechanism	 as	 a	 prevention	 measure.	 The	 system	 comprises	 of
                            modules,	 consisting	 of	 four	 sensors	 that	 identify	 the	 pollutants	 in	 the
                            environment	 and	 alert	 the	 user	 about	 the	 potential	 of	 the	 said	 pollutants	 to
                            trigger	Asthma.	The	sensors	are	connected	to	a	wireless	network	facilitating	the
                            implementation	of	an	efficient	healthcare	system	in	indoor	as	well	as	outdoor
                            scenarios	considering	places	with	and	without	network	connectivity</p>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={SIH_pdf} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}