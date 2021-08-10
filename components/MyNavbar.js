import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Link from 'next/link'
import useUser from '../lib/useUser'

const MyNavbar = () => {
  const { user } = useUser()
  const isLoggedIn = user ? user.isLoggedIn : false
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Cloud WAF Console</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref><Nav.Link>Home</Nav.Link></Link>
            {!isLoggedIn && <Link href="/signin" passHref><Nav.Link>Sign In</Nav.Link></Link>}
            {!isLoggedIn && <Link href="/signup" passHref><Nav.Link>Sign Up</Nav.Link></Link>}
            {isLoggedIn && <Link href="/api/signout" passHref><Nav.Link>Sign Out</Nav.Link></Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar
