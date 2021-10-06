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
            : <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-world-search-itim2101-lineal-itim2101.png" alt="My profile"/>
          }
          <h2>{props.userName} {props.userLastName}</h2>
        </div>
        <div className="badge__data">
          <div className='badge__data-user'>
            <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-world-search-itim2101-lineal-itim2101.png" alt="Worldwide" />
            <p>I'm from {props.userCountry}</p>
            <img src="https://img.icons8.com/external-itim2101-lineal-itim2101/50/000000/external-world-search-itim2101-lineal-itim2101.png" alt="Worldwide" />
          </div>
        </div>
        <p className='badge__footer'>{props.userAge} years old</p>
      </section>
    </React.Fragment>
  )
};

export {Badge};