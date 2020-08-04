import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const P1Char = () => {
    return (
       <div>
          <NavLink id="ccnext" class="button" to="/CharCreation">Done</NavLink>
       </div>
    );
}
 
export default P1Char;