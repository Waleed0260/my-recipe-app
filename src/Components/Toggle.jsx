import React from 'react'
import Moon from "@iconscout/react-unicons/icons/uil-moon";
import Sun from "@iconscout/react-unicons/icons/uil-sun";
import "./Toggle.css"
import { themeContext } from '../Context';
import { useContext } from 'react';

const Toggle = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    
    const handleClick = () => {
      // debugger
      theme.dispatch({ type: "toggle" });
    };
  return (
    <div className={darkMode? "toggle": "w-toggle"} onClick = {handleClick}>
      <Moon />
      <Sun />
      <div className={darkMode? "t-button": "w-button"}
        style={darkMode ? { left: "2px" } : { right: "2px" }}
        >
      </div>
      </div>
  )
}

export default Toggle
