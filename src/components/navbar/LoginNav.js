
import React from 'react';
import {avatar} from '../../assets';

function LoginNav(props) {
  return (
    <div>
      <div class="d-none d-sm-flex _3Oc4_fvr35">
        <div class="DgxDPXY18E">
          <div class="_2-7_ncOuT7">
            <a id="dropDownMenu" aria-current="page" class="_2nch6tx_mH dropdown-toggle wpfdHf2jhZ" data-toggle="dropdown" aria-expanded="false" href="#/" data-bs-toggle="dropdown">
              <div class="_5uGUhiNY0y _1Fr4bxILa2 null" style={{width: "36px", height: "36px"}}><img src={avatar} alt='' style={{width: "36px", height: "36px"}} /></div>
            </a>
            <div class="_23p_2N8N5B dropdown-menu shadow dropdown-menu-right" x-placement="bottom-end" style={{  position: "absolute", transform: "translate3d(-113px, 59px, 0px)", top: "0px", left: "0px", willChange: "transform"}}>
              <div>
                <div class="_1wrsVN5ZsT .bg-dark .dropdown-menu" aria-labelledby="dropDownMenu">
                  <div class="_13aGONcdzL"><a href="#/users/janetpexcel">My Account</a></div>
                  <div class="_13aGONcdzL"><a href="#/settings">Fund wallet</a></div>
                  {/* <div class="_13aGONcdzL"><a href="#/settings/profile">Change Profile Picture</a></div> */}
                  <div class="_13aGONcdzL"><a href="#/settings/password">Refer a Friend</a></div>
                  <div class="_13aGONcdzL"><a href="#/settings/password">FAQ</a></div>
                  <div class="_13aGONcdzL"><a href="#/settings/password">Support</a></div>
                </div>
                <div class="_3MStwjLens">
                  <p><button class="btn btn-danger btn-xs btn-block"><span class="fa fa-power-off"></span> LOGOUT</button></p>
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
