import React, {useState, useEffect} from 'react';

function Assistant () {
  const [user, setUser] = useState('');

  useEffect(() => {
    fetch('https://api.randomuser.me/')
      .then(res => res.json())
      .then(data => {
        const userData = {
          name: data.results[0].name.first,
          country: data.results[0].location.city,
          email: data.results[0].email,
          picture: data.results[0].picture.thumbnail
        }
  
        setUser(userData);
      });
  }, []);

  return (
    <React.Fragment>
      {user ? (
        <div>
          <h2>{user.name}</h2>
          <h2>{user.country}</h2>
          <h2>{user.email}</h2>
          <img src={user.picture} alt="User image" />
        </div>
        ) : null}
    </React.Fragment>
  )
}

export {Assistant};