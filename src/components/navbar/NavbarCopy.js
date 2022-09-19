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
                <Link to='/'><div class="e_P_8k4OrR"><a><img src={logo} alt="" /></a></div></Link>
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
                <NavLink to='/'><div class="_2C2pTUFVD5"><a aria-current="page" class="Vqgw7nl4yp" href="/"><i class="fa fa-home" style={{padding: '3px'}}></i>Home</a></div></NavLink>
                <NavLink to='/airtime'><div class="_2C2pTUFVD5"><a href="/"><i class="fa fa-signal" style={{padding: '3px'}}></i>Airtime</a></div></NavLink>
                <NavLink to='/social'><div class="_2C2pTUFVD5" data-toggle="modal" data-target="#SocialMenuModal"><a href='/'><i class="fa fa-thumbs-up" style={{padding: '3px'}}></i>Go Social</a></div></NavLink>
                <NavLink to='/'><div  class="d-none d-sm-flex _2C2pTUFVD5"><a href='/'><i class="fa fa-store" style={{padding: '3px'}}></i>Market</a></div></NavLink>
                <NavLink to='/market'><div class="d-none d-sm-flex _2C2pTUFVD5"><a class="mr-0" href="/"><i class="fa fa-users" style={{padding: '3px'}}></i>Users</a></div></NavLink>
              </div>
              <div class="e6_Obm5KyG col-md-2">
                <Link to='/login'><div><a class="btn btn-coloured-heavy btn-xl mr-2">Login</a></div></Link>
                  &nbsp; &nbsp;
                <Link to='/register'><div><a class="btn btn-outline btn-xl">Sign Up</a></div></Link>
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