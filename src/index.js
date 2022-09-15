import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import 'font-awesome/css/font-awesome.min.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterRoute from './components/Routes/RegisterRoute';
import Navbar from './components/navbar/Navbar';
import LoginRoute from './components/Routes/LoginRoute';
import ForgetPassword from './components/Auth/ForgetPassword';
import AirtimeSide from './components/Routes/AirtimeSide';
import NavbarMobile from './components/navbar/NavbarMobile';
import NavFixButttom from './components/navbar/NavFixButttom';
import UserRoute from './components/Routes/UserRoute';
import ApiResult from './components/Routes/ApiResult';
// import Sidebar from './components/sidebar/Sidebar';
// import RIghtSideBar from './components/RightSide/RIghtSideBar';
import SocialModal from './components/Modal/SocialModal';
import MarketModal from './components/Modal/MarketModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>

  <BrowserRouter basename='/'>
      <Navbar />
      <NavbarMobile/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/register' element={<RegisterRoute />}/>
        <Route path='/login' element={<LoginRoute />} />
        <Route path="*" element={<App />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
        <Route path="/airtime" element={<AirtimeSide />} />
        <Route path="/profile" element={<UserRoute />} />
        <Route path="/note/" element={<ApiResult />} />
      </Routes>
      <SocialModal />
      <MarketModal />

      <NavFixButttom />

  </BrowserRouter>

  <React.StrictMode>
    <App />
  </React.StrictMode>
  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
