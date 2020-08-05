import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const P2Char = () => {
    return (
        <div class="charcreation">
            <NavLink id="ccnext" class="button" to="/CharCreation">Done</NavLink>
        </div>
    );
}
 
export default P2Char;