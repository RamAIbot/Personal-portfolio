
import riscv1_img from '../../assets/images/riscv1_img.png'
import riscv2_img from '../../assets/images/riscv2_img.png'
import {HardwareNavbar} from "./HardwareNavbar";

export const RiscvRTL = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>RISCV RTL design</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p style={{background:'black'}} className="project_text_class">This project involves the implementation of a single-cycle RISC-V Instruction Set Architecture (ISA) on a 64-bit processor. The processor comprises 32 registers, each 64 bits in size, a 32-bit program counter, and an instruction memory limited to 8 instructions for visualization purposes. The simple program consists of 8 instructions, including basic integer operations such as add, add immediate, and branching. Subsequently, the project explores performance enhancement by increasing the clock frequency and introducing pipelining to the single-cycle RISC-V processor.</p>
                        <a href="https://github.com/RamAIbot/RISCV_RTLdesign.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <img src={riscv1_img} alt="riscv1" style={{width:'100%'}}/>
                    </div>
                    <div className="col-sm">
                        <img src={riscv2_img} alt="riscv2" style={{width:'100%'}}/>
                    </div>
                </div>
            </div>

        </div>
    )
}