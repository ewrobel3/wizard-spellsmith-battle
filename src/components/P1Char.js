import React, { useState } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const P1Char = () => {
   const [elemental, setElemental] = useState(localStorage.getItem("P1"));

   function construct() {
      let el = {...elemental};
      el.constructed = true;
      setElemental(el);
      localStorage.setItem("P1", {elemental});
   }
   
   return (
      <div class="charcreation">
         <div id="blocks">
            {(!elemental || !elemental.constructed) && 
               <button id="constructors" onClick={() => construct()}>
                  <div id="constructorStart">
                     {"elemental {"}
                  </div>
                  <div id="constructorEnd">
                     {"}"}
                  </div>
               </button>
            }
            
         </div>
         <div id="constructor">
            <div id="slot">
               {elemental && <div>
                  {elemental.constructed && 
                     <div id="constructorStart">
                        {"elemental {"}
                     </div>
                  }
                  {elemental.element && 
                     <div classname={elemental.element}>
                        {elemental.element}
                     </div>
                  }
                  {elemental.style &&
                     <div classname={elemental.style}>
                        {elemental.style}
                     </div>
                  }
                  {elemental.skill &&
                     <div classname={elemental.skill}>
                        {elemental.skill}
                     </div>
                  }
                  {elemental.constructed && 
                     <div id="constructorEnd">
                        {"}"}
                     </div>
                  }
               </div>}
            </div>
         </div>
         <div id="elemental">

         </div>
         <NavLink id="ccnext" class="button" to="/CharCreation">Done</NavLink>
      </div>
   );
}
 
export default P1Char;