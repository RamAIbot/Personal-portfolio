import {Container, Nav, Navbar} from "react-bootstrap";

export const ExpNav = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Experience</Navbar.Brand>
                <Nav className="me-0">
                    <Nav.Link href="/">Back</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}