import React from 'react';
import {useNavigate} from 'react-router-dom';
import { avatar } from '../../assets';
import {Link} from 'react-router-dom';



function More(props) {

  const navigate = useNavigate();

  return (
<div class="pr-md-0 col-sm-8 col-lg-6">
  <div class="_3wYllazvID">
    <div class="_1jlMcXs7_l">
      <div class="_3RyIhJP6hH">
        <div class="Gquizgm9Y4 ">
          <div class="_1k7rNH2IaX undefined ">
            <div class="_3AimTL0srH">
              <div class="_3hNNR1_9TU">
                <button onClick={()=>navigate(-1)} class="Hik1431SkT "><i class="fas fa-chevron-left"></i></button>
                <h4>Settings</h4>
              </div>
              <Link to='/'><div class="_2tY-IUxVMG"><button class="bg-danger">Logout</button></div></Link>
            </div>
          </div>
          <div class="_2pKFcUm7vm">
            <div class="vAyQTcPbuB">
              <div class="_5uGUhiNY0y null null"><img src={avatar} alt=''/></div>
              <div class="_1f0otvF1RI">
                <p class="_1FfMwpn4pQ">@username</p>
                <h6 class="_1xRso3XUrW">name</h6>
                <p class="_3_CZR7x30G"><Link to="/">View Profile <span class="fa fa-caret-right"></span></Link></p>
              </div>
            </div>
            <Link class="_2MfGHS9XGN" to="#/social/orders">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-list"></span> My Orders</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/funding">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-wallet"></span> Fund Wallet</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/withdraw">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-sign-out"></span> Place Withdrawals</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/transactions/shopping">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-list"></span> Transaction History</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/chats">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-comment-alt-dots"></span> My Chats</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/notifications">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-bell"></span> My Notifications</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/settings/profile">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-user"></span> Edit Profile</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/settings/password">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-lock"></span> Update Password</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/settings/location">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-map-marker-alt"></span> Update Location</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="#/settings/bank">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-check-circle"></span> Update Bank Details</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link to="#/settings/support" class="_2MfGHS9XGN">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fab fa-facebook"></span> Chat With Support</p>
                <p class="ml-auto"><span class="fab fa-facebook-messenger fa-2x text-primary"></span></p>
              </div>
            </Link>
            <Link to="#/settings/privacy" class="_2MfGHS9XGN">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-user-secret"></span> Privacy Policy</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link to="#/settings/about" class="_2MfGHS9XGN">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-info-circle"></span> About</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link to="#/settings/terms-of-use" class="_2MfGHS9XGN">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-info-circle"></span> Terms of Use</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link class="_2MfGHS9XGN" to="/">
              <div class="_3TbrcznAIT d-flex justify-content-between">
                <p><span class="fa fa-power-off"></span> Logout</p>
                <p class="ml-auto"><span class="fa fa-chevron-right"></span></p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default More;