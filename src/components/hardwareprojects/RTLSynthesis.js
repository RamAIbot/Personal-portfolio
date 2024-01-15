
import rca1_img from "../../assets/images/rca1.png"
import rca2_img from "../../assets/images/rca2.png"
import rca3_img from "../../assets/images/rca3.png"
import {HardwareNavbar} from "./HardwareNavbar";
export const RTLSynthesis = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>RTL design and Synthesis</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>5-Day Workshop on RTL Synthesis and Design</h4>


                        <ul style={{background:'black', padding:'30px',textAlign:'left'}}>
                            <li><strong>Day 1:</strong> Introduction to Verilog RTL and Synthesis.</li>
                            <li><strong>Day 2:</strong> Timing libs, hierarchical vs flat synthesis, and efficient flop coding styles.</li>
                            <li><strong>Day 3:</strong> Combinational and sequential optimizations.</li>
                            <li><strong>Day 4:</strong> GLS, blocking vs non-blocking, and Synthesis-Simulation mismatch.</li>
                            <li><strong>Day 5:</strong> If, case, for loop, and for generate.</li>
                        </ul>


                        <a href="https://github.com/RamAIbot/RTL_design_using_Verilog_with_Sky130_Technology.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <p>A RTL design and synthesis of 8 bit Ripple Carry Adder is shown below. The waveforms represent the RTL model and the synthesized model.</p>
                        <div className="row">
                            <div className="col-sm">
                                <img src={rca1_img} alt="rca1" style={{width:"100%",height:"100%"}}/>
                            </div>

                            <div className="col-sm">
                                <img src={rca2_img} alt="rca2" style={{width:"100%",height:"100%"}}/>
                            </div>

                            <div className="col-sm">
                                <img src={rca3_img} alt="rca3" style={{width:"100%",height:"100%"}}/>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}