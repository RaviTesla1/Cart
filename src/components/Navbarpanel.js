import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


const Navbarpanel = () => {

const cartProducts = useSelector( state => state.cart)

  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      
        <Nav className="me-auto">
          <Nav.Link to="/"  as={Link}>Products</Nav.Link> 
        </Nav>
        <Nav><Nav.Link to="/cart"  as={Link}   style={{textAlign:"right"}}>My Bag {cartProducts.length} </Nav.Link></Nav>

    </Container>
  </Navbar>
    </>
  )
}

export default Navbarpanel