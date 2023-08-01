
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import companyLogo from "../../assets/osmosislearn_logo.png";
import "../Navbar/TopNavbar.css";
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from "react-router-dom";

const TopNavbar = () => {
  return (
    <div>
      <Navbar bg="light" data-bs-theme="light" className='navbar'>
        <Container className='container'>
          <img src={companyLogo} alt="logo" />
          <Nav className="me-auto">
           <FontAwesomeIcon icon={faMagnifyingGlass} id='magnify-icon'/>
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#features">Create</Nav.Link>
            <Nav.Link href="#pricing">Events</Nav.Link>
            <Link to='/login'  style={{textDecoration: "none"}}><Nav.Link href="#login">Login</Nav.Link></Link>
            <Link to='/signup' style={{textDecoration: "none"}}><Nav.Link href="#pricing">Signup</Nav.Link></Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default TopNavbar


