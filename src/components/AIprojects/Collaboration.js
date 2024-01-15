import {AINavbar} from "./AINavbar";

export const Collaboration = () => {
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
                        <h1>Multi agent Collaboration </h1>
                        <p style={{textAlign:'left'}}>The project focuses on training a multi agent environment by making the agents collaborate to get a high reward. The goal of the project is to train agents to play tennis in a pre-built unity environment provided by Udacity. The agents were trained to collaborate so as to retain the ball between the agents without losing it in the ground or inside the net or outside the court.

                            The observation space consists of 8 variables corresponding to the position and velocity of the ball and racket. Each agent receives its own, local observation. The states are stacked into 3 frames and passed as input to the agents. Two continuous actions are available, corresponding to movement toward (or away from) the net, and jumping.</p>
                        <a href="https://github.com/RamAIbot/Deep_Reinforcement_learning_Collaboration_and_Competition.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Collaborative training</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/-3Frh2Hblao?si=MMgX-8psC1QqWmno" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>

                </div>

            </div>

        </div>
    )
}