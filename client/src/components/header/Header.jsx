import React from 'react'
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import {Nav, NavItem, NavLink} from 'reactstrap';
import PostEmployee from '../../components/postEmployee/PostEmployee';
import GetAllEmployees from '../../components/getAllEmployees/GetAllEmployees';
import Home from '../../components/home/Home';

const Header = () => {
  return (
    <Router>
      <Nav justified pills>
        <NavItem>
            <NavLink href="#">
            <Link to="/"> Home </Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
            <Link to="/post-employee"> Post employee </Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
            <Link to="get-all-employees"> Get all employees </Link>
            </NavLink>
        </NavItem>
        <NavItem>
            <NavLink disabled href="#">
            Disabled Link
            </NavLink>
        </NavItem>
      </Nav>

  <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/post-employee" element={<PostEmployee />}/>
    <Route path="/get-all-employees" element={<GetAllEmployees />}/>
  </Routes>
  
</Router>
    
  )
}

export default Header