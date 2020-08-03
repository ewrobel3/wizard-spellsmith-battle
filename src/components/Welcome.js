import React from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const Welcome = () => {
    return (
        <div id="welcome">
            <h1>Welcome to Wizard Spellsmith Battle!</h1>
            <NavLink class="button" to="/CharCreation">Begin</NavLink>
        </div>
    );
}
 
export default Welcome;