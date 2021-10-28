import React, {useState} from 'react';

import {Badge} from './Badge';

import '../scss/Assistant.scss';

function Assistant () {
  const [user, setUser] = useState('');
  const [showBadge, setShowBadge] = useState('');

  const getUser = () => {
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(data => {
        const userData = {
          name: data.results[0].name.first,
          lastName: data.results[0].name.last,
          country: data.results[0].location.country,
          age: data.results[0].dob.age,
          picture: data.results[0].picture.medium,
        };
  
        setUser(userData);
      })
      .catch(() => console.log('Ocurrio un error'));
  };

  const getBadge = () => setShowBadge(true);

  return (
    <React.Fragment>
      <div>
      <div className="new-pal">
        <button onClick={() => {
          getUser()
          getBadge()}}>
          Show me a new pal!
        </button>
      </div>
          { showBadge &&
          <div>
            <Badge
            userName={user.name}
            userLastName={user.lastName}
            userCountry={user.country}
            userAge={user.age}
            userPicture={user.picture}
          />
          </div>
           }
      </div>
    </React.Fragment>
  )
}

export {Assistant};