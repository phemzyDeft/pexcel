import React from 'react';
import RightSideBar from './components/RightSide/RightSideBar';
import Sidebar from './components/sidebar/Sidebar';
import {Outlet} from 'react-router-dom';

function Layout(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 px-0 d-none d-lg-block'>
          <Sidebar/>
        </div>
          <Outlet/>
        <div className='col-lg-3 px-2 d-none d-lg-block'>
          <RightSideBar/>        
        </div>
      </div>

    </div>
  );
}

export default Layout;