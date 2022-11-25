import React from 'react';
import { logo } from '../../assets';
import {Link} from 'react-router-dom';

function NavbarMobile(props) {

  return (
    <div className="._2HKXu-Z6A0 d-lg-none d-xl-none">
    <div className="_3yy5qylBdf">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="offset-xl-1 col-xl-10 h-100">
            <div className="_3cD_oITFvU">

              <div className="_3wLuyOXZHa">
                <div className="e_P_8k4OrR"><a href="/"><img src={logo} alt="" /></a></div>
              </div>
              <div className="e6_Obm5KyG col-md-2">
                <Link to='/login'><div><button className="btn btn-coloured-heavy btn-xl mr-2">Login</button></div></Link>
                  &nbsp; &nbsp;
                <Link to='/register'><div><button className="btn btn-outline btn-xl">Sign Up</button></div></Link>
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