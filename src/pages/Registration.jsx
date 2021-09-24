import React from 'react';
import {Navbar} from '../components/Navbar';
import {Badge} from '../components/Badge';
import {Form} from '../components/Form'
import '../scss/Registration.scss';

function Registration () {

  const [nameData, setNameData] = React.useState('');
  const [genderData, setGenderData] = React.useState('');
  const [emailData, setEmailData] = React.useState('');
  // const [staffData, setStaffData] =React.useState('')

  return (
    <section>
      <header>
        <Navbar/>
      </header>
      <div className = 'header-bg'>
        <img src="https://image.freepik.com/vector-gratis/fondo-luces-neon_23-2148465779.jpg" alt="Fondo" />
      </div>
      <main>
        <Form
          setNameData = {setNameData}
          setGenderData = {setGenderData}
          setEmailData = {setEmailData}
          // setuserStaff = {setStaffData}
        />
        <Badge
          userName = {nameData}
          userFavGender = {genderData}
          // userStaff = {staffData}
        />
      </main>
    </section>
  )
}

export {Registration};