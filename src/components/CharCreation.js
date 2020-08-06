import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const CharCreation = () => {
    return (
       <div class="charcreation">
          <h2>Create your elementals!</h2>
          <div id="players">
             <NavLink class="button" to="/P1Char">Player 1</NavLink>
             <NavLink class="button" to="/P2Char">Player 2</NavLink>
          </div>
          <NavLink id="ccnext" class="button" to="/Battle">Next</NavLink>
       </div>
    );
}
 
export default CharCreation;