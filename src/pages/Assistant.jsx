import React, {useState, useEffect} from 'react';

import {Layout} from '../components/Layout';
import {Badge} from '../components/Badge';

function Assistant () {
  const [user, setUser] = useState('');
  const [userPic, setUserPic] = useState('');

  useEffect (() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        const userData = {
          name: data[0].name,
          country: data[0].address.city,
          website: data[0].website
        }

        setUser(userData);
      })
      .catch(() => console.log('Ocurrio un error') )
  }, []);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(res => res.json())
      .then(data => {
        const userImg = {
          img: data[0].thumbnailUrl
        }
        setUserPic(userImg);
      })
      .catch(() => console.log('La imagen no cargo'))
  }, [])

  // useEffect(() => {
  //   fetch('https://api.randomuser.me/')
  //     .then(res => res.json())
  //     .then(data => {
  //       const userData = {
  //         name: data.results[0].name.first,
  //         lastName: data.results[0].name.last,
  //         country: data.results[0].location.country,
  //         age: data.results[0].dob.age,
  //         picture: data.results[0].picture.medium
  //       }
  
  //       setUser(userData);
  //     })
  //     .catch(() => console.log('Ocurrio un error'));
  // }, []);

  return (
    <React.Fragment>
      <Layout>
        <Badge
          userName={user.name}
          userCountry={user.country}
          userWeb={user.website}
          userPicture={userPic.img}
        />
        {user ? (
          <div>
            <h2>{user.name}</h2>
            <h2>{user.country}</h2>
            <h2>{user.website}</h2>
            <img src={userPic.img} alt="User image" />
          </div>
        ) : null}
      </Layout>
    </React.Fragment>
  )
}

export {Assistant};