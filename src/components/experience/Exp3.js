import {ExpNav} from "./ExpNav";

export const  Exp3 = () => {
    return (
        <div className="experience">
            <ExpNav/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 style={{margin:"20px",padding:"20px"}}>Firmware developer - Enability Foundation For Rehabilitation - India</h1>

            <p style={{fontSize:"x-large",margin:"10px",padding:"20px"}}>Internship : May 2019 - Jul 2019  </p>

            <p style={{fontSize:"large",marginLeft:"20px",marginRight:"20px",textAlign:"left"}}>
                My main project goal is to reduce the size of the embedded device currently in the market, designed to assist patients with cerebral palsy in using computers. The product includes various software applications aimed at improving the patients' condition. Given the high demand for the product, there is a crucial need to further reduce the device's size, making it portable and compact for easy carrying.
            </p>

            <p style={{fontSize:"large",marginLeft:"20px",marginRight:"20px",textAlign:"left"}}>
                My initial task involved analyzing the internal system to identify smaller-sized components available in the current market without compromising performance. Following the component research, I created a bill of materials for these components. This step was iterative, ensuring that the bill of materials did not exceed the size of the previous larger version of the product and contributed to its portability.
            </p>

            <p style={{fontSize:"large",marginLeft:"20px",marginRight:"20px",textAlign:"left"}}>Upon approval by the Technical Manager, I proceeded to the prototyping stage. I developed the bootloader and firmware specific to the microprocessor, tested the prototype, and demonstrated it to the company's board members.</p>

            <p style={{fontSize:"large",marginLeft:"20px",marginRight:"20px",textAlign:"left"}}>The next crucial stage was to convert this prototype into a PCB. I utilized CAD tools to design a multi-layer PCB. Once the design passed the Design Rule Check (DRC) and Layout vs. Schematic (LVS) verification successfully, it was approved for fabrication.</p>

            <p style={{fontSize:"large",marginLeft:"20px",marginRight:"20px",textAlign:"left"}}>The final part of my role involved post-silicon validation of the product and overseeing production deployment.</p>

            <br/>



        </div>
    )
}