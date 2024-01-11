import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Col, Container, Row} from "react-bootstrap";
import c_meter from '../assets/images/c_skill.png'
import cpp_meter from '../assets/images/Cpp_skill.png'
import java_meter from '../assets/images/java_skill.png'
import perl_meter from '../assets/images/perl_skill.png'
import python_meter from '../assets/images/python_skill.png'
import sv_skill_meter from '../assets/images/sv_skill.png'
import uvm_skill_meter from '../assets/images/uvm_skill.png'
import verilog_skill_meter from '../assets/images/verilog_skill.png'

export const Skills = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section className="skill" id="skills">
            <br/>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Programming Skills
                            </h2>

                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={cpp_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={python_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={verilog_skill_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={sv_skill_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={uvm_skill_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={c_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={java_meter} alt="Image"/>

                                </div>
                                <div className="item">
                                    <img src={perl_meter} alt="Image"/>

                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <br/>
        </section>
    )
}