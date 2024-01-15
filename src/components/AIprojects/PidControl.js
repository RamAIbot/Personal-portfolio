import {AINavbar} from "./AINavbar";
import highware_img from "../../assets/images/high_img.jpeg";

export const PidControl = () => {
    return (
        <div className="ai_project">
            <AINavbar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h1>PID Control</h1>
                        <p style={{textAlign:'left'}}>The project focuses on designing a PID controller for the autonomous vehicle to drive through the simulated environment which is done by Unity. The car travels with a constant speed of 30mph and the PID controller controls the steering angles based on the maneuver. An additional PID controller is used to keep the speed at 30mph to prevent any accidents.</p>

                            <p style={{textAlign:'left'}}>The previous controller works well for lower speeds of 30mph.Sometimes in straight lanes we must increase the speed to reach the goal faster. In the same way we need to decrease the speed which was in the straight lane to make a turn. To facilitate that we have added additional controller for speed reduction. Here we just use PD controller. The key here is that we only reduce the speed when the absolute value CTE is higher and only when the speed is greater than 30mph. Since at 30mph the car doesn't go to oscillations in sharp turns.</p>

                            <p style={{textAlign:'left'}}>The drawback of this method is that the car oscillates around the steady state due to the sudden reduction speed. If we just reduce the throttle value in steps of 0.1 when the absolute value CTE is higher and when the speed is greater than 30mph, this may fail at sharp turns since after travelling through the straight road before reaching the turn the car will be at high speed and gradual decrease may not be sufficient to make a turn. Thus, the PD controller solves that, but we may have oscillation around the steady state.</p>
                        <a href="https://github.com/RamAIbot/PID_Controller.git"><button type="button" className="btn btn-outline-light" >Github</button></a>
                    </div>
                </div>
                <br/>
                <div className="row">
                    <div className="col-sm">
                        <h4>Testing in 30mph</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/obyDK72fvxk?si=4lMurzSARZSXn-i6" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    </div>

                    <div className="col-sm">
                        <h4>High speed testing</h4>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/Sg6G2asmqAY?si=nX-YdxeLNHS7qXzC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>

                </div>


            </div>

        </div>
    )
}