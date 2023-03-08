import React from 'react';
import { Link } from 'react-router-dom';

function Navline() {
  return (
    <div className='nav' style={{backgroundColor:"green", 
    height:50, textAlign:"right", paddingTop:15}}>
      <Link to="/" className='home' style={{color:"white"}}>Home</Link>
      <Link to="/market" className='market' style={{color:"white",
    marginLeft:20}}>Market</Link>
      <Link to="/memorialtab" className='memorialtab' style={{color:"white",
    marginLeft:20}}>Memorial Tab</Link>
      <Link to="/industries" className='industries' style={{color:"white", 
    marginRight:20, marginLeft:20}}>Industries</Link>
    </div>
  );
}

export default Navline;