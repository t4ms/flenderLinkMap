// components/Maintenance.js
 
import React from 'react';
import icon from '../image/svg/fgAppIcon.svg';
import logo from '../image/svg/formgroupLogo.svg'
 
const maintenance = () => {
  return (
    <header className="App-header">
    <img src={icon} className="App-icon" alt="formgroup Icon" />
    <h2>Welcome to </h2><img src={logo} className="App-logo" alt="formgroup Logo"></img>
    <br></br>
    <p>Plattform for innovative solutions.</p>
    <p>This site is under construction.</p>
    <br></br>
    <a
      className="App-link"
      href="mailto:info@formgroup.io"
    >
      Contact
    </a>
    <br></br>
    
  </header>
  )
}
 
export default maintenance;