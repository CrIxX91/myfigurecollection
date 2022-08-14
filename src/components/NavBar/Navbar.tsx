import { Container, Navbar } from 'react-bootstrap'

export const MainNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#home">
              My Figure Collection
          </Navbar.Brand>
        </Container>
      </Navbar>
  )
}
