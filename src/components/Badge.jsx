import React from "react";
import '../scss/Badge.scss'

function Badge (props) {
  return (
  <section className="badge">
    <div className='badge__top'></div>
    <div className="badge__user">
      <img src="https://supportivy.com/wp-content/uploads/2020/08/dinosaur-pixel-art-Idees-designs-photo-16.png" alt="Perfil" />
      <h2>{props.userName}</h2>
    </div>
    <div className="badge__data">
      {/* <p>{props.userStaff}</p> */}
      <div className='badge__data-user'>
        <img src="/" alt="Social network" />
        <p >#{props.userFavGender}Lover</p>
        <img src="/" alt="Country" />
      </div>
    </div>
    <p className='badge__hastag'>Say Hi!</p>
  </section>
  )
};

export {Badge};