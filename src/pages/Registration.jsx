import React from 'react';

import {Layout} from '../components/Layout';
import {Badge} from '../components/Badge';
import {Form} from '../components/Form';
import {Assistant} from '../components/Assistant';

import '../scss/Registration.scss';

function Registration () {

  const [nameData, setNameData] = React.useState('');
  const [countryData, setCountryData] = React.useState('');
  const [ageData, setAgeData] = React.useState('');

  return (
    <React.Fragment>
      <Layout>
        <div className = 'header-text'>
          <h2>Sign up and meet new people!</h2>
        </div>
        <main className = 'hero'>
          <Form
            className = 'hero__form'
            setNameData = {setNameData}
            setCountryData = {setCountryData}
            setAgeData = {setAgeData}
          />
          <Badge
            className = 'hero__badge'
            userName = {nameData || 'User name'}
            userCountry = {countryData || 'Mexico'}
            userAge = {ageData || '26'}
          />
          <Assistant/>
        </main>
      </Layout>
    </React.Fragment>
  )
}

export {Registration};