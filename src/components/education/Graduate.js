import {EduNavbar} from "./EduNavbar";

export const Graduate = () => {
    return (
        <div className="education">
            <EduNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{background:"black",margin:"50px",padding:"20px"}}>Master of Science in Computer Engineering from North Carolina State University.</h1>

            <ul style={{background:"black",margin:"50px",padding:"50px",textAlign:"left"}}>
                <li>ECE 563 - Microprocessor Architecture</li>
                <li>ECE 506 - Architecture of Parallel Computers</li>
                <li>ECE 564 - ASIC and FPGA Design</li>
                <li>ECE 745 - ASIC Verification</li>
                <li>ECE 721 - Advanced Microarchitecture</li>
                <li>ECE 546 - VLSI Systems Design</li>
                <li>ECE 748 - Advanced Verification with UVM</li>
                <li>ECE 511 - Analog Electronics (Audit)</li>
                <li>ECE 566 - Compiler Optimization and Scheduling</li>
                <li>ECE 542 - Neural Networks</li>
            </ul>

            <h3 style={{marginBottom:"10px",marginLeft:"50px",marginRight:"50px"}}>GPA - 3.963 / 4.0</h3>
            <br/>



        </div>
    )
}