import React from 'react';

import {Link} from 'react-router-dom';

import '../scss/Navbar.scss';

function Navbar () {
  return (
    <React.Fragment>
      <nav className='navigation'>
        <Link to="/">
          <img src="https://supportivy.com/wp-content/uploads/2020/08/dinosaur-pixel-art-Idees-designs-photo-16.png" alt="Logo" />
          <span className='navigation__text-1'>Lorem</span>
          <span className='navigation__text-2'>Ipsum</span>
        </Link>
      </nav>
    </React.Fragment>
  )
}

export {Navbar};