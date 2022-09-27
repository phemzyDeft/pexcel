import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterRoute from './components/Routes/RegisterRoute';
import Navbar from './components/navbar/Navbar';
import LoginRoute from './components/Routes/LoginRoute';
import ForgetPassword from './components/Auth/ForgetPassword';
import NavbarMobile from './components/navbar/NavbarMobile';
import NavFixButttom from './components/navbar/NavFixButttom';
import SocialModal from './components/Modal/SocialModal';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<>
  
  <BrowserRouter>
  
      <Navbar />
      <NavbarMobile/>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<RegisterRoute />}/>
        <Route path='/login' element={<LoginRoute />} />
        <Route path="*" element={<App />} />
        <Route path="/forgotpassword" element={<ForgetPassword />} />
      </Routes>
      <SocialModal />

      <NavFixButttom />

  {/* <React.StrictMode>
    <App />
  </React.StrictMode> */}
  </BrowserRouter>

  </>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
