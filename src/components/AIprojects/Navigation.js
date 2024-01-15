import {AINavbar} from "./AINavbar";

export const Navigation = () => {
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
                        <p style={{textAlign:'left'}}>The project focusses on training an agent to collect bananas of particular color in a grid based environment developed in Unity. The agent is trained using deep reinforcement learning algorithms Deep Q learning. The agent gets data about its current state from the environment through the sensor readings which is of 37 dimensional. There is only one agent in this environment and it has 4 actions space which is of Up, Down, Left and Right movements. The agent get a reward of +1 collecting an yellow banana and a reward of -1 for collecting blue banana. The goal of the agent is to collect as many yellow bananas as possible. The task is episodic and comes to end after agent fails. The agent needs to get and average score of +13 to solve the environment.</p>
                        <a href="https://github.com/RamAIbot/Deep_Reinforcement_learning_Banana_environment.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/FGR21U1rhLI?si=5neBdknZ_LiGrS-4" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>

                </div>

            </div>

        </div>
    )
}