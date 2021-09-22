import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = () => {

  return(
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">DPL Library</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/library">Library</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar;