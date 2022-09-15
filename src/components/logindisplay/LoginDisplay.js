import React from 'react';
import {Link} from 'react-router-dom';

const LoginDisplay = (props) => {
  return (
    <div class="_3amMSmObol">
      <div class="_5ERPmRfOLO d-flex justify-content-between">
        <p>Welcome, janet</p>
        <p class="ml-auto"><Link to="#/logout"><i class="fas fa-power-off"></i> Logout</Link></p>
      </div>
      <div class="pScdTmddwf">
        <p class="f-12 mb-1">My Balance</p>
        <h1>₦0.00</h1>
        <p>
          <Link class="btn btn-outline mr-2" to="#" style={{marginRight: '.5rem'}}><i class="fas fa-wallet"></i> Fund</Link>
          <Link class="btn btn-outline" to="#"><i class="fas fa-share-square"></i> Withdraw</Link>
        </p>
      </div>
      <div class="_3B7cEiPGDD">
        <div class="row no-gutters">
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p><i class="fas fa-list"></i> Total Earnings</p>
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