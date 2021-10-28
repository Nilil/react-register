import React from 'react';

import {Navbar} from './Navbar';

function Layout (props) {
  return (
    <React.Fragment>
    <section className="lol">
      <Navbar/>
      {props.children}
    </section>
    </React.Fragment>
  )
}

export {Layout};