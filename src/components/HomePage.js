import {NavBar} from "./NavBar";
import {Banner} from "./Banner";
import {Skills} from "./Skills";
import {Projects} from "./Projects";

export const HomePage = () => {
    return (
        <div className="App">
            <NavBar/>
            <Banner/>
            <Skills/>
            <Projects/>
        </div>
    );
}