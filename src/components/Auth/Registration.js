import React from 'react';
import './Registration.css';
import {Link} from 'react-router-dom';
import {logo} from '../../assets';
// import axios from 'axios';

function Registration(props) {
  return (
    <div className="account-pages .mt-5 .mb-5">
  <div className=".container .pt-5">
    <div className="row justify-content-center">
      <div className=".col-md-7">
        <div className="card bg-pattern">
          <div className="card-body p-4">
            <div className="text-center w-75 m-auto">
              <a href="/">
              <span><img src={logo} alt="Logo" height="50px" /></span>
              </a>
              <p className="text-muted mb-2 mt-3" style={{fontSize: '.8rem'}}>Creating an account with us is easy, it takes less than a minute.</p>
            </div>
            {/* ====== Display error and messages ======= */}
            <div> 
            </div>
            {/* ====== End Display error and messages===== */}
            <form method="POST">
              <div className="row">
                <div className="col-md-4 pt-3">
                  <div className="form-group">
                    <label for="id_first_name">Select Account Type</label>
                    <select name="plan" id="" className="form-control">
                      <option value="member" selected>Free Plan</option>
                      <option value="reseller">Reseller Plan (₦1,000)</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 pt-3">
                  <div className="form-group">
                    <label for="id_first_name">First Name</label>
                    <input type="text" name="first_name" auhreffocus="" placeholder="Enter first name here" className="form-control" required="" id="id_first_name" />
                  </div>
                </div>
                <div className="col-md-4 pt-3">
                  <div className="form-group">
                    <label for="id_last_name">Last Name</label>
                    <input type="text" name="last_name" placeholder="Enter last name here" className="form-control" required="" id="id_last_name"/>
                  </div>
                </div>
                <div className="col-md-4 pt-3">
                  <div className="form-group">
                    <label for="id_phone">Phone Number</label>
                    <input type="text" name="phone" maxlength="11" minlength="11" placeholder="Enter phone number here" className="form-control" required="" id="id_phone" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <label for="id_email">Email</label>
                    <input type="email" name="email" placeholder="Enter email here" className="form-control" required="" id="id_email"/>
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <label for="id_username">Username</label>
                    <input type="text" name="username" maxlength="20" auhreffocus="" placeholder="Enter username here" className="form-control" required="" id="id_username" />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <label for="id_password1">Password</label>
                    <input type="password" name="password1" minlength="8" placeholder="Enter password here" className="form-control" required="" id="id_password1" />
                  </div>
                </div>
                <div className="col-md-6 pt-3">
                  <div className="form-group">
                    <label for="id_password2">Confirm Password</label>
                    <input type="password" name="password2" minlength="8" placeholder="Retype password here" className="form-control" required="" id="id_password2" />
                  </div>
                </div>
              </div>
              <div className="form-group mb-0 text-center pt-4 col-12">
                <div className="col-sm-12"><button className="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">SIGN UP</button></div>
              </div>
            </form>
            <div className="row mt-3">
              <div className="col-12 text-center">
                <p className="">Already have an account?  <button className="text-black ml-1"><Link to='/login'><b>Login</b></Link></button></p>
              </div>
              {/* ===== end col==== */}
            </div>
             {/* end row ==== */}
          </div>
          {/* === end card-body === */}
        </div>
        {/* === end card === */}
      </div>
      {/* === end col === */}
    </div>
    {/* === end row === */}

    <div className="footer-bothrefm mt-3">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 text-center"><span className="text-primary">.</span>  Copyright &copy; 2020. Pexcel Global Services All rights reserved. 
            <a href="https://api.whatsapp.com/send?phone=2348129974967&amp;text=Hello%20Pexcel,%20I%20Team%20">
              <small style={{color: "red"}}>&nbsp; chat via whatsapp</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* === end container === */}
</div>

  );
}

export default Registration;