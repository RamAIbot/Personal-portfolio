
import {Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {useEffect, useState} from "react";
import { SocialIcon } from 'react-social-icons'
import profile_pic from '../assets/images/54279782.jpeg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50)
            {
                seScrolled(true);
            }
            else
            {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll",onScroll);
        return () => window.removeEventListener("scroll",onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Navbar expand="md" className={scrolled ? "scrolled" : ""} bg="dark" data-bs-theme="dark" >
            <Container style={{marginLeft:'50px'}}>
                <Navbar.Brand href="#home">
                    <img src={profile_pic} alt="profile pic" className="profile_pic_img" />
                    Ramachandran SS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" >
                    <Nav className="me-auto" style={{
                        padding:'0px',
                        margin:'0px'
                    }}>
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active-navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text" >
                        <div className="social-icon">
                            <SocialIcon href="https://github.com/RamAIbot" url="www.github.com" style={{padding:'0px',marginTop:'0px',marginBottom:'0px',marginRight:'5px',width:'35px', height:'35px'}}/>
                            <SocialIcon href="https://www.linkedin.com/in/ramachandran-ss-162716144" url="www.linkedin.com" style={{padding:'0px',marginTop:'0px',marginBottom:'0px',width:'30px', height:'30px',marginRight: '20px'}}/>
                            <button type="button" className="btn btn-outline-light"onClick={() => console.log('connect')}><span>Let's Connect</span></button>
                        </div>

                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}