import React, { useState } from 'react'
import classes from './NightMode.module.css'
import { useTheme } from '../../theme/Theme'
function NightMode() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`${classes["toggle-button"]} ${
        theme === "dark" ? classes.toggled : ""
      }`}
      onClick={toggleTheme}
    >
      <div className={classes.thumb}></div>
    </button>
  );
}

export default NightMode;
