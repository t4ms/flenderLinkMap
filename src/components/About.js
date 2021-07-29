// components/About.js
 
import React from 'react';
import Navbar from './Navbar';

const about = () => {
  return (
    <div>
    <Navbar>
      
    </Navbar>
      <div style={{width: '40%', float:"left"}}>
        <h1>About formgroup</h1>
      </div>
      <div style={{width: '60%', float:"right"}}>
        <h2>content</h2>
      </div>
    </div>
  )
}
 
export default about;