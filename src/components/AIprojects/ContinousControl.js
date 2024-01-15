import {AINavbar} from "./AINavbar";

export const ContinousControl = () => {
    return (
        <div className="ai_project_rl">
            <AINavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>Navigation - Value based methods</h1>
                        <p style={{textAlign:'left'}}>The project focuses on training an agent whose action space is continuous in nature. The environment which is being used here is the reacher environment. The goal of the project is to have a mechanical hand to move to desired points in 3D space. The hand is controlled at two joints by the corresponding x and y torque which is needed to be applied. The observation space consists of 33 variables corresponding to position,rotation, velocity and angular velocities of the arm. The training here is performed by using only a single arm or by distributing the model over 20 identical arms and training.</p>
                        <a href="https://github.com/RamAIbot/Deep_Reinforcement_learning_Continous_Control.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Single agent training</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/rMFq80yOBtQ?si=fZwYsvA3SD54aDEM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                    <div className="col-sm">
                        <h4>Multi agent training</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/epX8-yMP9fA?si=BPSqmW2Bl4Z_dQBe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>

            </div>

        </div>
    )
}