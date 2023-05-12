import { Container, Row, Col, Navbar } from 'react-bootstrap';
import "../styles/Footer.css"
function Footer() {
  return (
    <>
      <Navbar variant="dark" >
        <Container>
          <Row>
            <Col>
              <Navbar.Brand>Resturant</Navbar.Brand>
            </Col>
            <Col className='d-flex'>
              <Navbar.Text className="text-md-end">
                © {new Date().getFullYear()} All rights reserved
              </Navbar.Text>
            </Col>
          </Row>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer;
