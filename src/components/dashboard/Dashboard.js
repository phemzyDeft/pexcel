import React from 'react';

const Dashboard = (props) => {
  return (
<div class="_3RyIhJP6hH">
  <div class="Gquizgm9Y4 ">
    <div class="_1k7rNH2IaX undefined ">
      <div class="_3AimTL0srH">
        <div class="_3hNNR1_9TU">
          <button class="Hik1431SkT "><i class="fas fa-chevron-left"></i></button>
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
        <p>Please enter the amount you want to fund your wallet with.</p>
      </div>
      <form autocomplete="off">
        <div class="form-row">
          <div class="col-6">
            <div class="form-group">
              <div class="_1StmaddT83 input-group">
                <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}>₦</span></div>
                <input type="number" class="_1echFS5NZD form-control border-0" placeholder="Amount" autocomplete="new-password" value="" />
              </div>
            </div>
          </div>
          <div class="col-6">
            <button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">FUND WALLET</button>
          </div>
        </div>
      </form>
      <div class="_34F_MjF9nd">
        <p>You can choose your preferred method of payment such as Card Payment, Bank Transfer, USSD etc. Simply click on "Change Payment" button on the Payment Checkout page.</p>
      </div>
    </div>
    <div class="_2cX9aQwrZz">
      <div class="_2BitxhdQLm">
        <h5>My Funding History</h5>
        <div class="table-responsive">
          <table class="table table-sm table-borderless">
            <thead>
              <tr>
                <th>S/N</th>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Method</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Sep 3rd 2022 2:21 pm</td>
                <td>₦1,000</td>
                <td>NONE</td>
                <td>
                  <p class="text-danger f-12">AWAITING PAYMENT</p>
                </td>
                <td><button class="btn btn-xs btn-warning mr-2 mb-1 mb-lg-0">PAY NOW</button><button class="btn btn-xs btn-danger">DELETE</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Dashboard;