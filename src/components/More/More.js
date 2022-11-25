import React from 'react';
import {useNavigate} from 'react-router-dom';
import { avatar } from '../../assets';
import {Link} from 'react-router-dom';



function More(props) {

  const navigate = useNavigate();

  return (
<div className="pr-md-0 col-sm-8 col-lg-6 px-0">
  <div className="_3wYllazvID">
    <div className="_1jlMcXs7_l">
      <div className="_3RyIhJP6hH">
        <div className="Gquizgm9Y4 ">
          <div className="_1k7rNH2IaX undefined ">
            <div className="_3AimTL0srH">
              <div className="_3hNNR1_9TU">
                <button onClick={()=>navigate(-1)} className="Hik1431SkT "><i className="fas fa-chevron-left"></i></button>
                <h4>Settings</h4>
              </div>
              <Link to='/'><div className="_2tY-IUxVMG"><button className="bg-danger">Logout</button></div></Link>
            </div>
          </div>
          <div className="_2pKFcUm7vm">
            <div className="vAyQTcPbuB">
              <div className="_5uGUhiNY0y null null"><img src={avatar} alt=''/></div>
              <div className="_1f0otvF1RI">
                <p className="_1FfMwpn4pQ">@username</p>
                <h6 className="_1xRso3XUrW">name</h6>
                <p className="_3_CZR7x30G"><Link to="/">View Profile <span className="fa fa-caret-right"></span></Link></p>
              </div>
            </div>
            <Link className="_2MfGHS9XGN" to="/fundwallet">
              <div className="_3TbrcznAIT d-flex justify-content-between">
                <p><span className="fa fa-wallet"></span> Fund Wallet</p>
                <p className="ml-auto"><span className="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link className="_2MfGHS9XGN" to="/">
              <div className="_3TbrcznAIT d-flex justify-content-between">
                <p><span className="fa fa-list"></span> Transaction History</p>
                <p className="ml-auto"><span className="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link className="_2MfGHS9XGN" to="/">
              <div className="_3TbrcznAIT d-flex justify-content-between">
                <p><span className="fa fa-bell"></span> My Notifications</p>
                <p className="ml-auto"><span className="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link className="_2MfGHS9XGN" to="#/settings/profile">
              <div className="_3TbrcznAIT d-flex justify-content-between">
                <p><span className="fa fa-user"></span> Edit Profile</p>
                <p className="ml-auto"><span className="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link className="_2MfGHS9XGN" to="/referral">
              <div className="_3TbrcznAIT d-flex justify-content-between">
                <p><span className="fa fa-user"></span> Refer Friends</p>
                <p className="ml-auto"><span className="fa fa-chevron-right"></span></p>
              </div>
            </Link>
            <Link to="/faq" className="_2MfGHS9XGN">
              <div className="_3TbrcznAIT d-flex justify-content-between">
                <p><span className="fa fa-user-secret"></span> FAQ</p>
                <p className="ml-auto"><span className="fa fa-chevron-right"></span></p>
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