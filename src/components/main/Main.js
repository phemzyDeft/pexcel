import React from 'react';
import Banner from '../AdvertBanner/Banner';
// import UpdatePassword from '../Auth/UpdatePassword';
import Card2 from '../cards/Card';
// import Dashboard from '../dashboard/Dashboard';
// import Referrer from '../Referrer/Referrer';


function Main(props) {
  return (
    <div className='.col-12 .col-md-8 .col-lg-6 .col-xl-6 mx-0 mb-5'>
        {/* <Referrer /> */}
      <Banner/>
      <Card2 />
      
      {/* <UpdatePassword />
      <Dashboard /> */}

    </div>

  );
}

export default Main;