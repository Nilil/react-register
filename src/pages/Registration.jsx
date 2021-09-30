import React from 'react';

import {Layout} from '../components/Layout';
import {Badge} from '../components/Badge';
import {Form} from '../components/Form';

import '../scss/Registration.scss';

function Registration () {

  const [nameData, setNameData] = React.useState('');
  const [countryData, setCountryData] = React.useState('');
  const [webData, setWebData] = React.useState('');

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
            setWebData = {setWebData}
          />
          <Badge
            userName = {nameData || 'User name'}
            userCountry = {countryData || 'Mexico'}
            userWeb = {webData || '26'}
          />
        </main>
      </Layout>
    </React.Fragment>
  )
}

export {Registration};