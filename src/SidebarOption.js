import React from "react";
import './SidebarOption.css';

function SidebarOption({active, text, Icon}) { // passing props in the function
  return (
   
   <div className={`sidebarOption ${active && 'sidebarOption--active'}`}>
    
        <Icon/> {/* We have to render this since Icon is a component */}

      <h2>{text}</h2>
    </div>
  
  );
}

export default SidebarOption;


// const name = 'Ayaan';
// const greeting = `Hello, ${name}!`;
// console.log(greeting); // Output: Hello, Ayaan!
// String interpolation for the active state
