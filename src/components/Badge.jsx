import React from "react";
import '../scss/Badge.scss'

function Badge (props) {
  return (
    <React.Fragment>
      <section className="badge">
        <div className='badge__top'></div>
        <div className="badge__user">
          {props.userPicture ?
            <img src={props.userPicture} alt="Profile" />
            : <img src="https://img.icons8.com/external-justicon-lineal-justicon/64/000000/external-friend-notifications-justicon-lineal-justicon.png" alt="My profile"/>
          }
          <h2>{props.userName} {props.userLastName}</h2>
        </div>
        <div className="badge__data">
          <div className='badge__data-user'>
            <img src="https://img.icons8.com/material/24/000000/marker--v1.png" alt="Worldwide"/>
            <p>I'm from {props.userCountry}</p>
            <img src="https://img.icons8.com/material/24/000000/marker--v1.png" alt="Worldwide"/>
          </div>
        </div>
        <p className='badge__footer'>{props.userAge} years old</p>
      </section>
    </React.Fragment>
  )
};

export {Badge};