import React from 'react';
import Main from '../../components/main/Main';
import RightSideBar from '../../components/RightSide/RightSideBar';
import Sidebar from '../../components/sidebar/Sidebar';

function Home(props) {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-lg-3 px-0 d-none d-lg-block'>
          <Sidebar/>
        </div>
        <div className='col-lg-6 px-0'>
          <Main/>
        </div>
        <div className='col-lg-3 px-2 d-none d-lg-block'>
          <RightSideBar/>        
        </div>
      </div>

    </div>
  );
}

export default Home;