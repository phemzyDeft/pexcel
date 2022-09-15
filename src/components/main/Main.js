import React from 'react';
import Banner from '../AdvertBanner/Banner';
// import UpdatePassword from '../Auth/UpdatePassword';
import Card2 from '../cards/Card2';
// import MarketModal from '../'
// import Dashboard from '../dashboard/Dashboard';
// import LoginDisplay from '../logindisplay/LoginDisplay';
// import SocialModal from '../Modal/SocialModal';
// import Referrer from '../Referrer/Referrer';


function Main(props) {
  return (
    <div className='col-12 col-md-8 col-lg-6 col-xl-6 px-0 .mx-0 .mb-5'>
        {/* <Referrer /> */}
      {/* <LoginDisplay /> */}
      <Banner/>
      <Card2 />
      
      {/* <UpdatePassword />
      <Dashboard /> */}

    </div>

  );
}

export default Main;