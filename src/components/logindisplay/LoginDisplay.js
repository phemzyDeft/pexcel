import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../cards/Card';

const LoginDisplay = (props) => {
  return (
    <div className='col-lg-6 col-12 px-0'>
    <div class="_3amMSmObol">
      <div class="_5ERPmRfOLO d-flex justify-content-between">
        <p>Welcome, user</p>
        <p class="ml-auhref"><Link to="#/logout"><i class="fas fa-power-off"></i> Logout</Link></p>
      </div>
      <div class="pScdTmddwf">
        <p class="f-12 mb-1">My Balance</p>
        <h1>₦0.00</h1>
        <br />
        <form auhrefcomplete="off">
          <div class="form-row d-flex justify-content-between align-item-between">
            <div class="col-6 me-1">
              <div class="form-group">
                <div class="_1StmaddT83 input-group">
                  <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}>₦</span></div>
                  <input type="number" class="_1echFS5NZD form-control border-0" placeholder="Amount" />
                </div>
              </div>
            </div>
            <div class="col-6 mt-1">
              <button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">FUND WALLET</button>
            </div>
          </div>
        </form>
      </div>
      <div class="_3B7cEiPGDD">
        <div class="row no-gutters">
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p style={{fontSize: "10px"}}><i class="fas fa-list"></i> hreftal Earnings</p>
              <h6>₦0.00</h6>
            </div>
          </div>
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p style={{fontSize: "10px"}}><i class="fas fa-wallet"></i> Pending Balance</p>
              <h6>₦0.00</h6>
            </div>
          </div>
          <div class="col-4">
            <div class="_22f-0Mamc5">
              <p style={{fontSize: "10px"}}><i class="fas fa-share-square"></i> Amount Spent</p>
              <h6>₦0.00</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='mt-1'>
      <Card />
    </div>
    </div>
  );
}

export default LoginDisplay;