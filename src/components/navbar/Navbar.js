import React from 'react';
import logo from '../../assets/logo-light.jpg';
import {Link, NavLink} from 'react-router-dom';

function Navbar(props) {
  return (
    
  <div class="_2HKXu-Z6A0">
    <div class="_3yy5qylBdf">
      <div class="container-fluid h-100">
        <div class="row h-100">
          <div class="offset-xl-1 col-xl-10 h-100">
            <div class="_3cD_oITFvU">
              <div class="_3wLuyOXZHa">
                <Link to='/'><div class="e_P_8k4OrR"><Link><img src={logo} alt="" /></Link></div></Link>
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
              <div class="d-none d-md-flex _3z2UmOiyg0 col-md-5">
                <NavLink to='/'><div class="_2C2pTUFVD5"><Link aria-current="page" class="Vqgw7nl4yp" to=""><i class="fa fa-home" style={{padding: '3px'}}></i>Home</Link></div></NavLink>
                <NavLink to='/airtime'><div classx="_2C2pTUFVD5"><Link to=""><i class="fa fa-signal" style={{padding: '3px'}}></i>Airtime</Link></div></NavLink>
                <NavLink to='/social' data-bs-toggle="modal" data-bs-target="#SocialMenuModal"><div class="_2C2pTUFVD5" ><Link to=''><i class="fa fa-thumbs-up" style={{padding: '3px'}}></i>Go Social</Link></div></NavLink>
                <NavLink to='/market' data-bs-toggle="modal" data-bs-target="#MarketMenuModal"><div  class="d-none d-sm-flex _2C2pTUFVD5"><Link to=''><i class="fa fa-store" style={{padding: '3px'}}></i>Market</Link></div></NavLink>
                <NavLink to='/more'><div class="d-none d-sm-flex _2C2pTUFVD5"><Link class="mr-0" to="#/users"><i class="fa fa-bars" style={{padding: '3px'}}></i>More</Link></div></NavLink>
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
};

export default Navbar;