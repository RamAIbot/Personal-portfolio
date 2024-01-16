import {HardwareNavbar} from "./HardwareNavbar";
import chip8_img from "../../assets/images/chip8_img_out.JPG";

export const EmbeddedSystems = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Embedded System Application Specialization: HCL Technologies - India</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p style={{background:'black'}} className="project_text_class">I underwent a six-month training program under leading mentors in the field of Embedded Systems at HCL Technologies India. The program encompassed both theoretical and practical application-based learning of the most popular microcontrollers for developing sophisticated applications. The initial phase focused on understanding computer architecture, C programming, and digital design.</p>
                        <p style={{background:'black'}} className="project_text_class">Following this foundation, I delved into the architecture of a basic microcontroller, 8051, and developed firmware programs to test it on an 8051 board. Various components, including WiFi, Bluetooth, Zigbee, various sensors, I2C, SPI, displays, keypads, 7-segments, GPS, and GSM, were interfaced to gain hands-on experience in embedded firmware development.</p>
                        <p style={{background:'black'}} className="project_text_class">The subsequent phase involved understanding the architecture of commercial microcontrollers, specifically PIC and ARM-based microcontrollers. The same set of components was interfaced with these microcontrollers and tested on physical boards. The final phase of the program was to demonstrate understanding through the development of projects:

                        <ul style={{background:'black',padding:"30px"}} className="project_text_class">
                            <li>Voting machine using Zigbee for result communication - 8051 project</li>
                            <li>Traffic light display system for a highway - PIC project</li>
                            <li>Development of a remote-controlled car using WiFi - ARM project</li>
                        </ul>
                    </p>
                        
                    </div>
                </div>
                <br/>

            </div>

        </div>
    )
}