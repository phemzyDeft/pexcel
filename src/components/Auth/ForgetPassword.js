import React from 'react';
import { logo } from '../../assets';
import {Link} from 'react-router-dom';

const ForgetPassword = (props) => {
  return (
<div class="account-pages .mt-5 .mb-5 .pt-5">
    <div class=".container">
        <div class="row justify-content-center">
            <div class=".col-md-5">
                <div class="card bg-pattern">

                    <div class="card-body p-4">
                        
                        <div class="text-center w-75 m-auto">
                            
                            
                            <button>
                                <span><img src={logo} alt="Logo" height="50px" /></span>
                            </button>
                            
                                
                            <p class="text-muted mb-2 mt-3">Reset Password.</p>
                        </div>

                        {/*  Display error and messages */}
                        <div> 
                        
                        
                        
                        </div>   
                        {/*-- End Display error and messages */}                                                                 
                        
                        <form method="POST"><input type="hidden" name="csrfmiddlewaretoken" value="mesV4IdkTQXsuSm79ioQMoBuB6h1gAi6h6pYnO498sLUUl5puxhGaG6FgfvwXjeu" />

                            <div class="row">
                                <div class="col-md-12 pt-3">
                                    <div class="form-group">
                                        <label for="id_username">Email</label>
                                        <input type="email" name='email' autofocus="" placeholder="Enter your email to for reset password" class="form-control" required="" id="id_username" />
                                    </div>
                                </div>
                            </div>

                            {/* <div>{message ? <p>{message}</p>: null}</div> */}

                            <div class="form-group mb-0 text-center pt-4 col-12">
                                <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">PROCEED</button></div>
                            </div>

                        </form>

                        <div class="row mt-3">
                            <div class="col-12 text-center mb-3">
                                <p class="text-center">
                                    <button class="text-black ml-"><Link to="/login"><b>back to login</b></Link></button>
                                </p>
                            </div> {/*-- end col */}
                        </div>
                        {/*-- end row */}

                    </div> {/*-- end card-body */}
                </div>
                {/*-- end card */}

                

            </div> {/*-- end col */}
        </div>
        {/*-- end row */}
    </div>
    {/*-- end container */}
</div>
  );
}

export default ForgetPassword;