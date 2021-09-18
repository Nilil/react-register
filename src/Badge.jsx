import React from "react";

function Badge () {
  return (
  <section className="badge">
    <img src="https://www.gravatar.com/avatar?d=identicon" alt="Banner" />
    <div className="badge__user">
      <img src="https://www.gravatar.com/avatar?d=identicon" alt="Perfil" />
      <h2>User name</h2>
    </div>
    <div className="badge__data">
      <p>Fronted Dev</p>
      <a href="">Link</a>
    </div>
    <p>#reactLover</p>
  </section>
  )
};

export {Badge};