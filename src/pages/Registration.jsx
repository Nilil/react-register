import React from 'react';
import {Navbar} from '../components/Navbar';
import {Badge} from '../components/Badge';
import {Form} from '../components/Form'
import '../scss/Registration.scss';

function Registration () {
  return (
    <section>
      <header>
        <Navbar/>
      </header>
      <div className = 'header-bg'>
        <img src="https://image.freepik.com/vector-gratis/fondo-luces-neon_23-2148465779.jpg" alt="Fondo" />
      </div>
      <main>
        <Badge
          userName = 'Paquito'
          userAccount = 'Twitter'
        />
        <Form/>
      </main>
    </section>
  )
}

export {Registration};