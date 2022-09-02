import React from 'react';
import image from '../../assets/logo-full.2b06162d.png';
import {Link} from 'react-router-dom';

function Navbar(props) {
  return (
  <div class="_2HKXu-Z6A0">
    <div class="_3yy5qylBdf">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="offset-xl-1 col-xl-10 h-100">
            <div class="_3cD_oITFvU">
              <div class="_3wLuyOXZHa">
                <div class="e_P_8k4OrR"><a href="#/"><img src={image} alt="" /></a></div>
              </div>
              <div class="d-none d-lg-block DhkAc_QZ0H">
                <form autocomplete="off">
                  <div class="form-row">
                    <div class="col-sm-12">
                      <div class="_1KmZqIJHGZ">
                        <div class="hUKiLuwZZD input-group">
                          <input type="text" class="form-control" placeholder="Search Products, Brands and Categories" />
                          <div class="input-group-append"><button class="" type="submit"><span class="fas fa-search"></span></button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div class="d-none d-md-flex _3z2UmOiyg0">
                <div class="_2C2pTUFVD5"><a aria-current="page" class="Vqgw7nl4yp" href="#/"><i class="fa fa-home" style={{padding: '3px'}}></i>Home</a></div>
                <div class="_2C2pTUFVD5"><a href="#/airtime"><i class="fa fa-signal" style={{padding: '3px'}}></i> Airtime</a></div>
                <div class="_2C2pTUFVD5"><a href="#/social"><i class="fa fa-thumbs-up" style={{padding: '3px'}}></i>Go Social</a></div>
                <div class="d-none d-sm-flex _2C2pTUFVD5"><a href="#/shop"><i class="fa fa-store" style={{padding: '3px'}}></i>Market</a></div>
                <div class="d-none d-sm-flex _2C2pTUFVD5"><a class="mr-0" href="#/users"><i class="fa fa-users" style={{padding: '3px'}}></i>Users</a></div>
              </div>
              <div class="e6_Obm5KyG">
                <div><a class="btn btn-coloured-heavy btn-xl mr-2" href="#/auth/login">Login</a></div>
                &nbsp; &nbsp;
                <div><a class="btn btn-outline btn-xl" href=""><Link to='/register'>Sign Up</Link></a></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Navbar;