
import pd from '../../assets/images/pd1.png'
import {HardwareNavbar} from "./HardwareNavbar";

export const PhysicalDesign = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>RISCV Physical Design</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>5-Day Workshop on Advanced Physical Design</h4>

                        <ul style={{background:'black',padding:'30px',textAlign:'left'}}>
                            <li><strong>Day 1:</strong> Inception of open-source EDA, OpenLANE, and Sky130 PDK.</li>
                            <li><strong>Day 2:</strong> Understand the importance of good floorplan vs. bad floorplan and introduction to library cells.</li>
                            <li><strong>Day 3:</strong> Design and characterize one library cell using Magic Layout tool and ngspice.</li>
                            <li><strong>Day 4:</strong> Pre-layout timing analysis and the importance of a good clock tree.</li>
                            <li><strong>Day 5:</strong> Final steps for RTL2GDS.</li>
                        </ul>

                        <a href="https://github.com/RamAIbot/Advanced_Physical_Design_using_OpenLANE-Sky130.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>RISC V Physical design using OPENRoad</h4>
                        <img src={pd} alt="pd" style={{width:"100%",height:"100%"}}/>
                    </div>
                </div>
            </div>

        </div>
    )
}