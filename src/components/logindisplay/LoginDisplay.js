import React from 'react';
// import {Link} from 'react-router-dom';

const LoginDisplay = (props) => {
  return (
    <div class="_3amMSmObol">
      <div class="_5ERPmRfOLO d-flex justify-content-between">
        <p>Welcome, janet</p>
        <p class="ml-auhref"><a href="#/logout"><i class="fas fa-power-off"></i> Logout</a></p>
      </div>
      <div class="pScdTmddwf">
        <p class="f-12 mb-1">My Balance</p>
        <h1>₦0.00</h1>
        <p>
          <a class="btn btn-outline mr-2" href="#" style={{marginRight: '.5rem'}}><i class="fas fa-wallet"></i> Fund</a>
          <a class="btn btn-outline" href="#"><i class="fas fa-share-square"></i> Withdraw</a>
        </p>
      </div>
      <div class="_3B7cEiPGDD">
        <div class="row no-gutters">
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p><i class="fas fa-list"></i> hreftal Earnings</p>
              <h6>₦0.00</h6>
            </div>
          </div>
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p><i class="fas fa-wallet"></i> Pending Balance</p>
              <h6>₦0.00</h6>
            </div>
          </div>
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p><i class="fas fa-share-square"></i> Amount Spent</p>
              <h6>₦0.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default LoginDisplay;