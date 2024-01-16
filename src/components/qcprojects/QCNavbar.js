import {Container, Nav, Navbar} from "react-bootstrap";

export const QCNavbar = () => {
    return(
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Quantum Computing Projects</Navbar.Brand>
                <Nav className="me-0">
                    <Nav.Link href="/">Back</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}