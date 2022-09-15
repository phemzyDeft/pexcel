import React from 'react';
import logo from '../../assets/logo-light.jpg';
import {Link} from 'react-router-dom';

const ForgetPassword = (props) => {
  return (
<div class="account-pages mt-5 mb-5">
    <div class="container pt-5">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <div class="card bg-pattern">

                    <div class="card-body p-4">
                        
                        <div class="text-center w-75 m-auto">
                            <Link to="/">
                                <span><img src={logo} alt="" height="22" /></span>
                            </Link>
                        </div>

                        {/*-- Display error and messages -*/}
                        <div> 
                        
                        </div>   
                        {/*-- End Display error and messages -*/}                                                                 
                        
                        
                        
                        <form method=""><input type="hidden" name="" value=""/>
                            <p class="text-muted mb-2 mt-3 text-center">Reset your password.
                                <br />
                                Enter your email address and we'll send you an email with instructions to reset your password.
                            </p>
                            <div class="row mt-4">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label for="id_username">Email or Username</label>
                                        <input type="text" name="email_or_password" id="username" class="form-control" placeholder="Enter your email or username here" required="" />
                                        <div class="invalid-feedback">
                                            enter the correct email
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="form-group mb-0 text-center">
                              <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">Proceed</button></div>
                            </div>

                            <div class="col-12 text-center mt-2">
                                <Link class="text-black"><Link to='/login'><b>back to login</b></Link></Link>
                            </div>
                            
                        </form>
 
                    </div> {/*-- end card-body -*/}
                </div>
                {/*-- end card -*/}

            </div> {/*-- end col -*/}
        </div>
        {/*-- end row -*/}
    </div>
    {/*-- end container -*/}
{/*-- end page -*/}

 {/*-- Footer ==== -*/}
<div class="footer-bottom">
    <div class="container">
        <div class="row">
  <div class="col-lg-12 col-md-12 col-sm-12 text-center"><span class="text-primary">.</span>  All Rights Reserved. 
    <Link to="https://api.whatsapp.com/send?phone=2348129974967&amp;text=Hello%20Pexcel,%20I%20Team%20">
      <small style={{color: "red"}}>&nbsp; chat via whatsapp</small>
    </Link>
    </div>
        </div>
    </div>
</div>
</div>


  );
}

export default ForgetPassword;