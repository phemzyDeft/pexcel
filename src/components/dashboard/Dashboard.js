import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
  const navigate = useNavigate()
  return (
<div className="_3RyIhJP6hH col-lg-6 col-12">
  <div className="Gquizgm9Y4 ">
    <div className="_1k7rNH2IaX undefined ">
      <div className="_3AimTL0srH">
        <div className="_3hNNR1_9TU">
          <button className="Hik1431SkT" onClick={()=>navigate(-1)}><i className="fas fa-chevron-left"></i></button>
          <h4>Fund Wallet</h4>
        </div>
      </div>
    </div>
  </div>
  <div className="_1vkTxI4J3c">
    <div className="qaajt5p9d-">
      <div className="_1GvTr7m-vk">
        <h5>Wallet Balance</h5>
      </div>
      <div className="_5dhxKVl12c">
        <h5>₦ 0</h5>
      </div>
    </div>
    <div className="pg410G45aJ">
      <div className="_2laqypk8JG">
        <p>Please enter the amount you want to fund your wallet with.</p>
      </div>
      <form auhrefcomplete="off">
        <div className="form-row d-flex justify-content-between align-item-between">
          <div className="col-6 me-3">
            <div className="form-group">
              <div className="_1StmaddT83 input-group">
                <div className="input-group-prepend"><span className="input-group-text border-0" style={{backgroundColor: "inherit"}}>₦</span></div>
                <input type="number" className="_1echFS5NZD form-control border-0" placeholder="Amount" auhrefcomplete="new-password" value="" />
              </div>
            </div>
          </div>
          <div className="col-6 mt-1">
            <button className="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">FUND WALLET</button>
          </div>
        </div>
      </form>
      <div className="_34F_MjF9nd">
        <p>You can choose your preferred method of payment such as Card Payment, Bank Transfer, USSD etc. Simply click on "Change Payment" buthrefn on the Payment Checkout page.</p>
      </div>
    </div>
  </div>
</div>

  );
}

export default Dashboard;