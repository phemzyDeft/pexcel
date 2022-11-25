import React from 'react';
import { logo } from '../../assets';
import {Link} from 'react-router-dom';
import LoginNav from './LoginNav';

function Navbar(props) {
  return (
    
  <div className="_2HKXu-Z6A0">
    <div className="_3yy5qylBdf">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="offset-xl-1 col-xl-10 h-100">
            <div className="_3cD_oITFvU">
              <div className="_3wLuyOXZHa">
                <Link to='/'><div className="e_P_8k4OrR"><a href='/'><img src={logo} alt="" /></a></div></Link>
              </div>
              <div className="d-none d-lg-block DhkAc_QZ0H">
                <form autoComplete="off">
                  <div className="form-row">
                    <div className="col-sm-12">
                      <div className="_1KmZqIJHGZ">
                        <div className="hUKiLuwZZD input-group">
                          <input type="text" className="form-control" placeholder="Airtime, Data, Cable, Electricity" />
                          <div className="input-group-append"><button className="" type="submit"><span className="fas fa-search"></span></button></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="d-none d-md-flex _3z2UmOiyg0 col-md-5">
                <Link to='/'><div className="_2C2pTUFVD5"><a aria-current="page" className="Vqgw7nl4yp" href="/"><i className="fa fa-home" style={{padding: '3px'}}></i>Home</a></div></Link>
                <Link to='/airtime'><div className="_2C2pTUFVD5"><a href="/"><i className="fa fa-signal" style={{padding: '3px'}}></i>Airtime</a></div></Link>
                <Link to='/'><div className="_2C2pTUFVD5" data-bs-toggle="modal" data-bs-target="#SocialMenuModal"><a href='/'><i className="fa fa-thumbs-up" style={{padding: '3px'}}></i>Go Social</a></div></Link>
                <Link to='/more'><div className="d-none d-sm-flex _2C2pTUFVD5"><a className="mr-0" href="/"><i className="fa fa-bars" style={{padding: '3px'}}></i>More</a></div></Link>
              </div>
              <div className="e6_Obm5KyG col-md-2">
                <LoginNav />
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
};

export default Navbar;