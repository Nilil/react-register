import React from 'react';

import {Layout} from '../components/Layout';
import {Link} from 'react-router-dom';

function Main () {
  return (
    <React.Fragment>
      <Layout>
        <nav>
          <Link to="/registration">Resgistration</Link>
          <br/>
          <Link to="/assistant">Assistants</Link>
          <br/>
          <Link to="/404">Error</Link>
        </nav>
      </Layout>
    </React.Fragment>
  )
}

export {Main};