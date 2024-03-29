import {Col, Container, Row} from "react-bootstrap";
import {ArrowRightCircle} from "react-bootstrap-icons";
import {useEffect, useState} from "react";


export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Computer Engineer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        },delta);

        return () => {clearInterval(ticker)};
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta / 2)
        }

        if(!isDeleting && updatedText === fullText)
        {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum+1);
            setDelta(500);
        }

    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1 style={{textAlign:'left'}}>{`Hi! I'm Ram`} <br/><span className="txt-rotate"><span className="wrap">{text}</span></span></h1>
                        <p style={{textAlign:'left',color:"white"}}>I'm Ramachandran Sekanipuram Srikanthan, a Computer Engineer from NC State. My passion for hardware engineering ignited during undergrad, where I led three impactful project initiatives, learning from each. Success comes from my drive to solve complex problems. As a grad student, I specialize in RTL design and verification, and Computer architecture. I'm a self-taught software programmer with projects in autonomous vehicles. Beyond engineering, I'm an avid pianist, finding music's structured creativity enlightening and empowering my work. The blend of logic, emotion, and intuition in both fields fascinates me.</p>

                        {/*<button type="button" className="btn btn-outline-info" onClick={() => console.log('banner connect')}>Let's Connect &nbsp;<ArrowRightCircle size={25}/></button>*/}
                    </Col>
                </Row>
                {/*<Row>*/}
                {/*    <Col xs={12} md={6} xl={5}>*/}
                {/*        /!*<p>sdasdasdasdada</p>*!/*/}
                {/*        /!*<p>asdasdasdadadadsa</p>*!/*/}
                {/*        /!*<p>sdasdasdasdada</p>*!/*/}
                {/*        /!*<p>asdasdasdadadadsa</p>*!/*/}
                {/*    </Col>*/}
                {/*</Row>*/}

            </Container>
        </section>
    )
}