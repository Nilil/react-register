import React from 'react';
import '../scss/Form.scss';

function Form ( {nameData, setNameData, countryData, setCountryData, webData, setWebData} ) {

  const onChangeName = event => {
    setNameData(event.target.value);
  }
  const onChangeCountry = event => {
    setCountryData(event.target.value);
  }
  const onChangeWeb = event => {
    setWebData(event.target.value);
  }

  const onClickSubmit = () => console.log('Clickeado');

  return (
    <React.Fragment>
      <section className='form-container'>
        <h1 className='form-container--title'>New Attendant</h1>
        <form action="" className='form-container__fields'>

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
            <label htmlFor="web" className='form-container__fields-text'>Your web page</label>
            <input
            type="text"
            onChange = {onChangeWeb}
            name='web'
            id="web"
            placeholder='example.com'
            value={webData}
            />
          </div>

        </form>
        <button 
        type = 'button'
        onClick = {onClickSubmit}
        className='form-container-btn'
        > Enviar
        </button>
      </section>
    </React.Fragment>
  )
}

export {Form};