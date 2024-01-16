import {ProjectNavbar} from "./ProjectNavbar";

export const UVM = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>LC3 Microprocessor Verification - Universal Verification Methodology.</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">The project focuses on developing a UVM-based testbench architecture for conducting functional verification of the LC3 microprocessor. The processor comprises five stages: fetch, decode, execute, memory, and writeback. Verification is performed for each stage according to the Verification plan. Additionally, the processor is tested with random input values for each component. The project was guided by Dr. Bob Oden, a pioneer in the field of Design Verification. An overall coverage of 85% has been achieved.
                        </p>

                        <p className="project_text_class">The project development was closely monitored by the professor and graded based on the coverage and verification plan. For further information, please feel free to reach out.</p>

                    </div>
                </div>

            </div>

        </div>
    )
}