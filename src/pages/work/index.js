import React from 'react';
import App from '../../app';
import Work from '../../components/work';


const WorkIndex = ({ location: { pathname } }) => {

  return (

    <App>
      <Work pathname={pathname}/>
    </App>

  );

};

export default WorkIndex;
