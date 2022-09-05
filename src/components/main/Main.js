import React from 'react';
import Banner from '../AdvertBanner/Banner';
import Card2 from '../cards/Card2';
// import Dashboard from '../dashboard/Dashboard';
// import LoginDisplay from '../logindisplay/LoginDisplay';

function Main(props) {
  return (
    <div className='col-12 col-md-8 col-lg-6 col-xl-6 px-0 mx-0 mb-5'>
      
      {/* <LoginDisplay /> */}
      <Banner/>
      <Card2 />
      {/* <Dashboard /> */}
    </div>
  );
}

export default Main;