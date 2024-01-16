import {ProjectNavbar} from "./ProjectNavbar";

export const DeepLearning = () => {
    return (
        <div className="grad_project">
            <ProjectNavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h1>Neural Networks - Terrain Recognition and Plant phenotype project</h1>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h4>Terrain Recognition</h4>
                        <p className="project_text_class" style={{background:"black",padding:"20px"}}>This project centers around the development and training of a deep learning model tailored for terrain identification based on gyroscope values. Leveraging advanced machine learning techniques, the model aims to analyze and categorize different terrains by interpreting data captured from gyroscopic sensors. This innovative approach offers potential applications in navigation systems, robotics, and environmental monitoring, providing an intelligent solution for terrain recognition.</p>
                        <a href="https://github.com/RamAIbot/Terrain_recognition.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                        <br/>
                        <br/>
                        <h4>Plant Phenotype</h4>
                        <p className="project_text_class" style={{background:"black",padding:"20px"}}>This project revolves around the development and training of a deep learning model specifically designed for the analysis of plants within a controlled laboratory environment. By leveraging machine learning algorithms, the model seeks to interpret visual data captured from plants, offering insights into their health, growth patterns, and overall characteristics. This project holds significant implications for researchers and scientists working in the field of plant biology and agricultural sciences.</p>
                        <a href="https://github.com/RamAIbot/Plant-phenotyping-.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/ejwoy2Wlr-8?si=PePPU3taeXXcuy9u" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>
                </div>
            </div>

        </div>
    )
}