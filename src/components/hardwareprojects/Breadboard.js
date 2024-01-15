import {HardwareNavbar} from "./HardwareNavbar";

export const Breadboard = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>8-bit Breadboard computer</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class" style={{background:'black'}}>This project centers around the development of a fully functional 8-bit breadboard computer, showcasing versatile clocking options and a robust set of features. The computer boasts two clocking versions - an astable multivibrator for automatic execution and a monostable multivibrator for debugging purposes. Featuring dual 8-bit registers (A and B), an 8-bit adder-based ALU capable of addition and subtraction, and a 4-bit instruction register supporting 16 instructions, including load, store, add, subtract, and basic branching, this computer offers a comprehensive platform for learning and experimentation.</p>
                        <p style={{textAlign:'left'}}><b>Key Features: </b></p>
                        <ul style={{textAlign:'left',background:'black',padding:'30px'}}>
                            <li><b>Clocking Versatility:</b> Two clocking options - astable multivibrator for automatic operation and monostable multivibrator for debugging flexibility.</li>
                            <li><b>Instruction Set:</b> A diverse set of 16 instructions, covering fundamental operations such as load, store, add, subtract, and basic branching.</li>
                            <li><b>EEPROM Bootloader:</b> Manual conversion of assembly language to binary, facilitated by an Arduino-based EEPROM bootloader for program loading into RAM upon reset.</li>
                                <li><b>7-Segment Display System:</b> Coordinated by EEPROM, this system displays output values upon receiving the display command.</li>
                                <li><b>Triple Power Sources:</b> To accommodate the increasing current demands of ICs, the CPU utilizes three power sources in parallel, each rated at 5V and 1A.</li>
                        </ul>
                        <a href="https://github.com/RamAIbot/8bit_processor_emulator.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/QXGjVPOMp00?si=X2evjszi-VnWxN3B" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}