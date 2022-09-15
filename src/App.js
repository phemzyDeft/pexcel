import Main from './components/main/Main';
import RIghtSideBar from './components/RightSide/RIghtSideBar';
import Sidebar from './components/sidebar/Sidebar';
// import Profile from './components/User/Profile';
import {Routes, Route} from 'react-router-dom';
// import AirtimeSide from './components/Routes/AirtimeSide';
import UserRoute from './components/Routes/UserRoute';
// import ApiResult from './components/Routes/ApiResult';
// import SocialModal from './components/Modal/SocialModal';
// import MarketModal from './components/Modal/MarketModal';
import Referrer from './components/Referrer/Referrer';
import AccToMoney from './components/Referrer/AccToMoney';
import SocialTask from './components/PerformSocialTask/SocialTask';
import SocialTaskandEarn from './components/PerformSocialTask/SocialTaskandEarn';
import More from './components/More/More';
import './index.css';





function App() {
  return (
    <>
      <div className="container">
        <div className="row my-md-5 py-md-3">
        {/* <SocialModal />
        <MarketModal /> */}
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
          <RIghtSideBar />
        </div>
      </div>
    </>
  );
}

export default App;
