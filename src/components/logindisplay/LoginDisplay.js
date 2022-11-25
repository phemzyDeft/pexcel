import React from 'react';
import {Link} from 'react-router-dom';
import Card from '../cards/Card';

const LoginDisplay = (props) => {
  return (
    <div className='col-lg-6 col-12 px-0'>
    <div className="_3amMSmObol">
      <div className="_5ERPmRfOLO d-flex justify-content-between">
        <p>Welcome, user</p>
        <p className="ml-auhref"><Link to="#/logout"><i className="fas fa-power-off"></i> Logout</Link></p>
      </div>
      <div className="pScdTmddwf">
        <p className="f-12 mb-1">My Balance</p>
        <h1>₦0.00</h1>
        <br />
        <form auhrefcomplete="off">
          <div className="form-row d-flex justify-content-between align-item-between">
            <div className="col-6 me-1">
              <div className="form-group">
                <div className="_1StmaddT83 input-group">
                  <div className="input-group-prepend"><span className="input-group-text border-0" style={{backgroundColor: "inherit"}}>₦</span></div>
                  <input type="number" className="_1echFS5NZD form-control border-0" placeholder="Amount" />
                </div>
              </div>
            </div>
            <div className="col-6 mt-1">
              <button className="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">FUND WALLET</button>
            </div>
          </div>
        </form>
      </div>
      <div className="_3B7cEiPGDD">
        <div className="row no-gutters">
          <div className="col-4">
            <div className="_22f-0Mamc5">
              <p style={{fontSize: "10px"}}><i className="fas fa-list"></i> hreftal Earnings</p>
              <h6>₦0.00</h6>
            </div>
          </div>
          <div className="col-4">
            <div className="_22f-0Mamc5">
              <p style={{fontSize: "10px"}}><i className="fas fa-wallet"></i> Pending Balance</p>
              <h6>₦0.00</h6>
            </div>
          </div>
          <div className="col-4">
            <div className="_22f-0Mamc5">
              <p style={{fontSize: "10px"}}><i className="fas fa-share-square"></i> Amount Spent</p>
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