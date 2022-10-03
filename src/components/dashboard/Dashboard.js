import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = (props) => {
  const navigate = useNavigate()
  return (
<div class="_3RyIhJP6hH col-lg-6 col-12">
  <div class="Gquizgm9Y4 ">
    <div class="_1k7rNH2IaX undefined ">
      <div class="_3AimTL0srH">
        <div class="_3hNNR1_9TU">
          <button class="Hik1431SkT" onClick={()=>navigate(-1)}><i class="fas fa-chevron-left"></i></button>
          <h4>Fund Wallet</h4>
        </div>
      </div>
    </div>
  </div>
  <div class="_1vkTxI4J3c">
    <div class="qaajt5p9d-">
      <div class="_1GvTr7m-vk">
        <h5>Wallet Balance</h5>
      </div>
      <div class="_5dhxKVl12c">
        <h5>₦ 0</h5>
      </div>
    </div>
    <div class="pg410G45aJ">
      <div class="_2laqypk8JG">
        <p>Please enter the amount you want href fund your wallet with.</p>
      </div>
      <form auhrefcomplete="off">
        <div class="form-row d-flex justify-content-between align-item-between">
          <div class="col-6 me-3">
            <div class="form-group">
              <div class="_1StmaddT83 input-group">
                <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}>₦</span></div>
                <input type="number" class="_1echFS5NZD form-control border-0" placeholder="Amount" auhrefcomplete="new-password" value="" />
              </div>
            </div>
          </div>
          <div class="col-6 mt-1">
            <button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">FUND WALLET</button>
          </div>
        </div>
      </form>
      <div class="_34F_MjF9nd">
        <p>You can choose your preferred method of payment such as Card Payment, Bank Transfer, USSD etc. Simply click on "Change Payment" buthrefn on the Payment Checkout page.</p>
      </div>
    </div>
  </div>
</div>

  );
}

export default Dashboard;