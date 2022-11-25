
import React from 'react';
import {avatar} from '../../assets';
import {Link} from 'react-router-dom';

function LoginNav(props) {
  return (
    <div>
      <div className="d-none d-sm-flex _3Oc4_fvr35">
        <div className="DgxDPXY18E">
          <div className="_2-7_ncOuT7">
            <a id="dropDownMenu" aria-current="page" className="_2nch6tx_mH dropdown-toggle wpfdHf2jhZ" data-toggle="dropdown" aria-expanded="false" href="#/" data-bs-toggle="dropdown">
              <div className="_5uGUhiNY0y _1Fr4bxILa2 null" style={{width: "36px", height: "36px"}}><img src={avatar} alt='' style={{width: "36px", height: "36px"}} /></div>
            </a>
            <div className="_23p_2N8N5B dropdown-menu shadow dropdown-menu-right" x-placement="bottom-end" style={{  position: "absolute", transform: "translate3d(-113px, 59px, 0px)", top: "0px", left: "0px", willChange: "transform"}}>
              <div>
                <div className="._1wrsVN5ZsT .bg-dark .dropdown-menu" aria-labelledby="dropDownMenu">
                  <div className="_13aGONcdzL"><Link to="/fundwallet">My Account</Link></div>
                  <div className="_13aGONcdzL"><Link to="/fundwallet">Fund wallet</Link></div>
                  <div className="_13aGONcdzL"><Link to="/referral">Refer a Friend</Link></div>
                  <div className="_13aGONcdzL"><Link to="/faq">FAQ</Link></div>
                  <div className="_13aGONcdzL"><Link to="/support">Support</Link></div>
                </div>
                <div className="_3MStwjLens text-white">
                  <p><button className="btn btn-danger btn-xs btn-block"><span className="fa fa-power-off"></span><Link to='/'>LOGOUT </Link></button></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginNav;

// aria-haspopup="true"
