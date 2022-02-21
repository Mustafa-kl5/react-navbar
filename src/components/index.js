import React from "react";
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink } from './navelement'
function Navbar() {
  return (
    <>
      <Nav>
        <NavLink to="/">Logo</NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/services'>Services</NavLink>
          <NavLink to='/contact-us'>Contact Us</NavLink>
          <NavLink to='/sign-up'>Sign Up</NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
}

export default Navbar;
