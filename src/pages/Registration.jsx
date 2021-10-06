import React from 'react';

import {Layout} from '../components/Layout';
import {Badge} from '../components/Badge';
import {Form} from '../components/Form';
// import {MyPic} from '../components/MyPicture';
import {Assistant} from '../components/Assistant';

import '../scss/Registration.scss';

function Registration () {

  const [nameData, setNameData] = React.useState('');
  const [countryData, setCountryData] = React.useState('');
  const [ageData, setAgeData] = React.useState('');

  return (
    <React.Fragment>
      <Layout>
        <div className = 'header-bg'>
          <img src="https://image.freepik.com/vector-gratis/fondo-luces-neon_23-2148465779.jpg" alt="Fondo" />
        </div>
        <main>
          <Form
            setNameData = {setNameData}
            setCountryData = {setCountryData}
            setAgeData = {setAgeData}
          />
          <Badge
            userName = {nameData || 'User name'}
            userCountry = {countryData || 'Mexico'}
            userAge = {ageData || '26'}
          />
          {/* <MyPic/> */}
          <Assistant/>
        </main>
      </Layout>
    </React.Fragment>
  )
}

export {Registration};