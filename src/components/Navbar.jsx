import React from 'react';

import '../scss/Navbar.scss';

function Navbar () {
  return (
    <React.Fragment>
      <header className='navigation'>
          <img src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-add-friend-social-media-sbts2018-outline-sbts2018-2.png"  alt="Logo"/>
          <span className='navigation__text-1'>Friend Finder</span>
      </header>
    </React.Fragment>
  )
}

export {Navbar};