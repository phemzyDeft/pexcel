import React from 'react';
import Banner from '../AdvertBanner/Banner';
import Card2 from '../cards/Card2';
import Dashboard from '../dashboard/Dashboard';
import LoginDisplay from '../logindisplay/LoginDisplay';

function Main(props) {
  return (
    <div className='col-6 col-md-6 col-sm-6'>
      {/* <LoginDisplay /> */}
      <Banner />
      <Card2 />
      {/* <Dashboard /> */}
    </div>
  );
}

export default Main;