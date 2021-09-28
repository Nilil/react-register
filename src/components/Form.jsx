import React from 'react';
import '../scss/Form.scss';

function Form ( {nameData, setNameData, genderData, setGenderData, emailData, setEmailData /*,staffData, setStaffData*/} ) {

  const onChangeName = event => {
    console.log(event.target.value);
    setNameData(event.target.value);
}
const onChangeGender = event => {
  console.log(event.target.value);
  setGenderData(event.target.value);
}
const onChangeEmail = event => {
  console.log(event.target.value);
  setEmailData(event.target.value);
}

// const onClickStaffY = () => {
//   console.log('Yes');
//   setStaffData('STAFF')
// }
// const onClickStaffN = () => {
//   console.log('No');
//   setStaffData('GUEST')
// }

  const onClickSubmit = () => console.log('Clickeado');

  return (
    <React.Fragment>
      <section className='form-container'>
        <h1 className='form-container--title'>New Attendant</h1>
        <form action="" className='form-container__fields'>

          <div className='form-container__fields-block'>
            <label htmlFor="name" className='form-container__fields-text'>Name</label>
            <input
            type="text"
            onChange = {onChangeName}
            name='name'
            id="name"
            placeholder='Midori Hanoi'
            value={nameData}
            />
          </div>

          <div className='form-container__fields-block'>
            <label htmlFor="favorite-gender" className='form-container__fields-text'>Your favorite movie gender</label>
            <input
            type="text"
            onChange = {onChangeGender}
            name='favorite-gender'
            id="favorite-gender"
            placeholder='SciFi'
            value={genderData}
            />
          </div>

          <div className='form-container__fields-block'>
            <label htmlFor="email" className='form-container__fields-text'>Email</label>
            <input
            type="email"
            onChange = {onChangeEmail}
            name='email'
            id="email"
            placeholder='example@test.com'
            value={emailData}
            />
          </div>

          {/* <label htmlFor="status">Are you a Staff member?</label>
          <button type='button' onClick={onClickStaffN} >No</button>
          <button type='button' onClick={onClickStaffY} >Yes</button> */}

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