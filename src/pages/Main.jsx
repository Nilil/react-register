import React from 'react';
import {Link} from 'react-router-dom'

function Main () {
  return (
    <nav>
      <Link to="/registration">Resgistration</Link>
      <br/>
      <Link to="/error">Error</Link>
    </nav>
  )
}

export {Main};