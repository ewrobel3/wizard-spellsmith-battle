import React from 'react';
import './App.css';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    return (
       <div id="navBar">
          <NavLink className="navlink" to="/">Welcome</NavLink>
          <NavLink className="navlink" to="/CharCreation">Character Creation</NavLink>
          <NavLink className="navlink" to="/battle">Battle</NavLink>
       </div>
    );
}
 
export default Navigation;