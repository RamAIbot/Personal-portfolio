import {ProjectNavbar} from "../graduateprojects/ProjectNavbar";
import RadixprojectFile from "../../assets/pdffiles/radix_project.pdf";

export const ParallelRadixSort = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Parallelization of Radix Sorting</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <p className="project_text_class">This project is dedicated to the parallelization of the radix sort algorithm, aiming to deliver exponential speedup compared to its conventional serial implementation, particularly when sorting extensive datasets. Conceived as a fundamental component of the Architecture of Parallel Computers course (ECE 506) at North Carolina State University, this initiative explores the potential of parallel computing to significantly enhance the performance of sorting algorithms.</p>
                        <a href="https://github.com/RamAIbot/Parallel-Radix-sort.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <embed src={RadixprojectFile} width="1000px" height="700px" />
                    </div>
                </div>
            </div>

        </div>
    )
}