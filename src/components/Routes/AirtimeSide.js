import React from 'react';
import Airtime from '../Airtime/Airtime';
import AirtimeSidebar from '../Airtime/AirtimeSidebar';

function AirtimeSide(props) {
  return (
    <div className="container pt-5 mt-3">
      <div className='row'>
        <AirtimeSidebar />
        <Airtime />
      </div>
    </div>
  );
}

export default AirtimeSide;