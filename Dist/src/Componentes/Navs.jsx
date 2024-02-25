import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';


function Navbarsxd() {

  const back = {
    backgroundColor: '#084e84'
  }
  const tit = {
    paddingLeft: '100px',
    color: 'white'
  }
  const p = {
    color: 'white',

  }
  const p2 = {
    backgroundColor: '#084e84',
    color: 'white',
    borderColor:'#084e84',
    paddingTop:'7px'
  }
  return (
    <Navbar expand="lg" style={back} >
      <Navbar.Brand style={tit} href="home">eMe Distribuidora</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link style={p} href="sobrenosotros">Sobre Nosotros</Nav.Link>
          <Dropdown>
            <Dropdown.Toggle style={p2} id="dropdown-basic"> Productos </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="panes">Panes</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Fiambres</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Quesos</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );
}

export default Navbarsxd;