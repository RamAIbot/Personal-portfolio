
import chip8_img from '../../assets/images/chip8_img_out.JPG'
import {HardwareNavbar} from "./HardwareNavbar";

export const Chip = () => {
    return (
        <div className="hardware_project">
            <HardwareNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Chip8 Game Emulator: Unraveling Computer Architecture with C</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p style={{background:'black'}} className="project_text_class">This project delves into the intricacies of computer architecture through the creation of a fundamental emulator for Chip8 games. Designed using the C programming language, the emulator operates within the constraints of a modest 4KB memory and encompasses a concise set of 36 instructions. This initiative offers a hands-on exploration of computer architecture principles, decoding the essentials of instruction execution and memory management.</p>
                        <a href="https://github.com/RamAIbot/Chip8_emulator.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <img src={chip8_img} alt="chip8 output screen"/>
                        {/*<embed src={CacheprojectFile} width="1000px" height="700px" />*/}
                    </div>
                </div>
            </div>

        </div>
    )
}