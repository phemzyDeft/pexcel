import React from 'react';
// import Main from './components/main/Main';
import {Routes, Route} from 'react-router-dom';
import UserRoute from './components/Routes/UserRoute';
import Referrer from './pages/Referrer/Referrer';
import More from './components/More/More';
import './index.css';
import Airtime from './pages/subscription/Airtime/Airtime';
import PrivateRoutes from './Private/PrivateRoutes';
import LoginDisplay from './components/logindisplay/LoginDisplay';
import Cable from './pages/subscription/Cable/Cable';
import Electricity from './pages/subscription/Electricity/Electricity';
import Data from './pages/subscription/Data/Data';
// import AirtimeToCash from './pages/AirtimeToCash/AirtimeToCash';
import BlogDisplay from './pages/Blog/BlogDisplay';
import Home from './pages/Home/Home';
import Layout from './Layout';
import RegisterRoute   from './components/Routes/RegisterRoute';
import LoginRoute from './components/Routes/LoginRoute';
import ForgotpasswordRoute from './components/Routes/ForgotpasswordRoute';
import Faq from './pages/Faqsection/Faqpagesection';
import SidebarMobile from './components/navbar/SidebarMobile';
import RightSideBar from './components/RightSide/RightSideBar';

function App() {
  return (
    
    <div className="container">
      
      
      <div className="row my-md-5 py-md-3">
        <Routes>
          
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}/>
            <Route path='/airtime' element={<Airtime />}/>
            <Route path="/blog" element={<BlogDisplay />} />
            <Route path='/cable' element={<Cable />} />
            <Route path='/data' element={<Data />} />
            <Route path='/electricity' element={<Electricity />} />
            <Route path='/logindisplay' element={<LoginDisplay />} />
            <Route path="/referral" element={<Referrer />} />
            <Route path="/profile" element={<UserRoute />} />
            <Route path="/more" element={<More />} />
            <Route path="/fundwallet" element={<LoginDisplay />} />
            <Route path="/register" element={<RegisterRoute />} />
            <Route path="/login" element={<LoginRoute />} />         
            <Route path="/forgotpassword" element={<ForgotpasswordRoute />} />
            <Route path="/faq" element={<Faq />} />
          </Route>
            <Route path="/menu" element={<SidebarMobile />} />
            <Route path="/activities" element={<RightSideBar />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/more" element={<More />} />
            <Route path='/cable' element={<Cable />} />
            <Route path='/airtime' element={<Airtime />} />
            <Route path='/data' element={<Data />} />
            <Route path='/electricity' element={<Electricity />} />

            {/* <Route path='/airtime-to-cash' element={<AirtimeToCash />} /> */}
            <Route path='/logindisplay' element={<LoginDisplay />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
