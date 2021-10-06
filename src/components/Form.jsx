import React from 'react';

import {Modal} from './Portal';

import '../scss/Form.scss';

function Form ({nameData, setNameData, countryData, setCountryData, ageData, setAgeData}) {

  const [modalStatus, setModalStatus] = React.useState('');

  const onChangeName = event => setNameData(event.target.value);
  const onChangeCountry = event => setCountryData(event.target.value);
  const onChangeAge = event => setAgeData(event.target.value);

  const onClickSubmit = event => {
    event.preventDefault();
    setModalStatus(true);
    console.log(`Name: ${nameData} / Country: ${countryData} / Web: ${ageData}`)
  }

  return (
    <React.Fragment>
      <section className='form-container'>
        <h1 className='form-container--title'>Create your profile</h1>
        <form 
        onSubmit= {onClickSubmit}
        className='form-container__fields'>

          <div className='form-container__fields-block'>
            <label htmlFor="name" className='form-container__fields-text'>Full name</label>
            <input
            type="text"
            onChange = {onChangeName}
            name='name'
            id="name"
            placeholder='User name'
            value={nameData}
            />
          </div>

          <div className='form-container__fields-block'>
            <label htmlFor="country" className='form-container__fields-text'>Your country</label>
            <input
            type="text"
            onChange = {onChangeCountry}
            name='country'
            id="country"
            placeholder='M&eacute;xico'
            value={countryData}
            />
          </div>

          <div className='form-container__fields-block'>
            <label htmlFor="age" className='form-container__fields-text'>Your age</label>
            <input
            type="number"
            onChange = {onChangeAge}
            name='age'
            id="age"
            placeholder='26'
            value={ageData}
            />
          </div>

          <input 
            type = 'submit'
            value = 'Submit'
            className='form-container-btn'
          />
          <input
            type = 'reset'
            value = 'Reset fields'
            className='form-container-btn'
          />
        </form>
      </section>
      { modalStatus &&
      <Modal>
        <h2>Modal</h2>
      </Modal>
      }
    </React.Fragment>
  )
}

export {Form};