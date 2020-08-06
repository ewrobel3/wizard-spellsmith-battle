import React, { useState } from 'react';
import './App.css';
import { NavLink } from 'react-router-dom';
 
const P1Char = () => {
   const [elemental, setElemental] = useState(localStorage.getItem("P1"));
   //const navigate = useNavigate();
   //navigate('/CharCreation', { state:{p1element:elemental.element, p1style:elemental.style, p1skill:elemental.skill}, replace: true });

   function construct() {
      let e1 = {...elemental};
      e1.constructed = true;
      e1.element = false;
      e1.style = false;
      e1.skill = false;
      setElemental(e1);
      localStorage.setItem("P1", {elemental});
   }

   function setElement(element) {
      let e1 = {...elemental};
      e1.element = element;
      setElemental(e1);
      localStorage.setItem("P1", {elemental});
   }

   function setStyle(style) {
      let e1 = {...elemental};
      e1.style = style;
      setElemental(e1);
      localStorage.setItem("P1", {elemental});
   }

   function setSkill(skill) {
      let e1 = {...elemental};
      e1.skill = skill;
      setElemental(e1);
      localStorage.setItem("P1", {elemental});
   }
   
   return (
      <div class="playerchars">
         <div id="blocks">
            {(!elemental || !elemental.constructed) && 
               <button id="constructors" onClick={() => construct()}>
                  <div id="constructorStart">
                     {"elemental ("}
                  </div>
                  <div id="constructorEnd">
                     {")"}
                  </div>
               </button>
            }
            {(elemental && elemental.constructed) && <div>
               <div id="elements">
                  {elemental.element !== "Water" && 
                     <button className="Water" onClick={() => setElement("Water")}>Water</button>
                  }
                  {elemental.element !== "Earth" && 
                     <button className="Earth" onClick={() => setElement("Earth")}>Earth</button>
                  }
                  {elemental.element !== "Fire" && 
                     <button className="Fire" onClick={() => setElement("Fire")}>Fire</button>
                  }
                  {elemental.element !== "Air" && 
                     <button className="Air" onClick={() => setElement("Air")}>Air</button>
                  }
               </div>
               <div id="styles">
                  {elemental.style !== "Aggressive" && 
                     <button className="style" onClick={() => setStyle("Aggressive")}>Aggressive</button>
                  }
                  {elemental.style !== "Balanced" && 
                     <button className="style" onClick={() => setStyle("Balanced")}>Balanced</button>
                  }
                  {elemental.style !== "Defensive" && 
                     <button className="style" onClick={() => setStyle("Defensive")}>Defensive</button>
                  }
               </div>
               <div id="skills">
                  {elemental.skill !== "Power" && 
                     <button className="skill" onClick={() => setSkill("Power")}>Power</button>
                  }
                  {elemental.skill !== "Accuracy" && 
                     <button className="skill" onClick={() => setSkill("Accuracy")}>Accuracy</button>
                  }
                  {elemental.skill !== "Speed" && 
                     <button className="skill" onClick={() => setSkill("Speed")}>Speed</button>
                  }
               </div>
            </div>}
            
         </div>
         <div id="constructor">
            <div className="label">Elemental Constructor</div>
            <div id="slot">
               {elemental && <div>
                  {elemental.constructed && 
                     <div id="constructorStart">
                        {"elemental ("}
                     </div>
                  }
                  {elemental.element && 
                     <div className={elemental.element}>
                        {elemental.element}
                     </div>
                  }
                  {elemental.style &&
                     <div className="style">
                        {elemental.style}
                     </div>
                  }
                  {elemental.skill &&
                     <div className="skill">
                        {elemental.skill}
                     </div>
                  }
                  {elemental.constructed && 
                     <div id="constructorEnd">
                        {")"}
                     </div>
                  }
               </div>}
            </div>
         </div>
         <div id="elemental">
            {elemental.constructed &&
               <div id={elemental.element ? elemental.element : "blank"}>
                  <div className="eyeball"></div>
                  <div className="pupil"></div>
                  <div id={elemental.style}></div>
                  <div id={elemental.skill}></div>
               </div>
            }
            <div id="podium"></div>
         </div>
         {(elemental && elemental.constructed && elemental.element && elemental.style && elemental.skill) && 
            <NavLink id="ccnext" class="button" to='/P1Method'>Next: SpellMethods</NavLink>
         }
      </div>
   );
}
 
export default P1Char;