import React from 'react';
import '../scss/Form.scss';

function Form () {

  const onChangeText = () => console.log("Escribes")


  return (
    <div>
      <h1>New Attendant</h1>
      <form action="">
        <label htmlFor="">First Name</label>
        <input type="text" onChange = {onChangeText}/>
      </form>
    </div>
  )
}

export {Form};