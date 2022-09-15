import React from 'react';
import logo from '../../assets/logo-light.jpg';
import {Link} from 'react-router-dom';

function NavbarMobile(props) {
  return (
    <div class="._2HKXu-Z6A0 d-lg-none d-xl-none">
    <div class="_3yy5qylBdf">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="offset-xl-1 col-xl-10 h-100">
            <div class="_3cD_oITFvU">
              <div class="_3wLuyOXZHa">
                <div class="e_P_8k4OrR"><Link to="#/"><img src={logo} alt="" /></Link></div>
              </div>
              <div class="e6_Obm5KyG col-md-2">
                <Link to='/login'><div><Link class="btn btn-coloured-heavy btn-xl mr-2">Login</Link></div></Link>
                  &nbsp; &nbsp;
                <Link to='/register'><div><Link class="btn btn-outline btn-xl">Sign Up</Link></div></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
  );
}

export default NavbarMobile;