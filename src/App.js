import React from 'react';
import Main from './components/main/Main';
import RightSideBar from './components/RightSide/RightSideBar';
import Sidebar from './components/sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';
import UserRoute from './components/Routes/UserRoute';
import Referrer from './components/Referrer/Referrer';
import AccToMoney from './components/Referrer/AccToMoney';
import SocialTask from './components/PerformSocialTask/SocialTask';
import SocialTaskandEarn from './components/PerformSocialTask/SocialTaskandEarn';
import More from './components/More/More';
import './index.css';
// import Navbar from './components/navbar/Navbar';
import SocialModal from './components/Modal/SocialModal';

function App() {
  return (
    <>
    
      <div className="container">
        
        <div className="row my-md-5 py-md-3">
          <Sidebar />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<UserRoute />} />
            <Route path="/referral" element={<Referrer />} />
            <Route path="/referral/member" element={<AccToMoney />} />
            <Route path="/social/advertise" element={<SocialTask />} />
            <Route path="/social/earn" element={<SocialTaskandEarn />} />
            <Route path="/more" element={<More />} />
          </Routes>
          <RightSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
