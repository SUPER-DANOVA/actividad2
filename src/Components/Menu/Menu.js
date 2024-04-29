import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
//import NavDropdown from 'react-bootstrap/NavDropdown';
import './Menu.scss';
import {
  changeOption
} from '../../reducers/optionSlice';
import { useDispatch } from 'react-redux';

function Menu() {

  const dispatch = useDispatch();

  const changeStateGoals = (e) =>{
    e.preventDefault();
    dispatch(changeOption('goals'));
  }

  const changeStateTaks = (e) =>{
    e.preventDefault();
    dispatch(changeOption('tasks'));
  }


  return (
    <Navbar expand="lg" className="bg-body-tertiary menu">
      <Container>
          <Navbar.Brand href="#home">
            <img
              src="logo192.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt='React logo'
            />
          </Navbar.Brand>
        <Navbar.Toggle className='custom-toggler' aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Tasks" onClick={changeStateTaks} >Tasks</Nav.Link>
            <Nav.Link href="#Goals" onClick={changeStateGoals}>Goals</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;