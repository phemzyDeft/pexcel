import React from 'react';

const Login=(props)=> {
  return (
	  <div class="modal fade" id="LoginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
    <div class="pYGYoc5d6n modal-dialog modal-dialog-centered" role="document">
      <div class="undefined modal-content">
        <div class="_1B2WqkaAve modal-body">
          <button class="_1N6OSfQXXY"><span class="fas fa-times"></span></button>
          <div class="_25ZN_gEQJZ">
            <div class="_1g1Kuqpw16">
              <div class="_2cTwIwHGqw">
                <h4 class="mb-1">Log in to Pexcel</h4>
                <p class="f-12">Login to enjoy all amazing features on Pexcel.</p>
              </div>
              <div class="_2hnh5MwSda text-center d-flex flex-column align-items-center">
                <form autocomplete="off">
                  <div class="form-row">
                    <div class="col-sm-12">
                      <div class="form-group">
                        <div class="_1StmaddT83 input-group">
                          <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}><span class="fa fa-user"></span></span></div>
                          <input type="text" class="_1echFS5NZD form-control border-0" placeholder="Username or Email or Phone No." autocomplete="new-password" />
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12">
                      <div class="form-group">
                        <div class="_1StmaddT83 input-group">
                          <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}><span class="fa fa-lock"></span></span></div>
                          <input type="password" class="_1echFS5NZD form-control border-0" placeholder="Password" autocomplete="new-password" />
                          <div class="input-group-append"><span class="_32iYqntMuD input-group-text border-0"><span class="fa fa-eye-slash"></span></span></div>
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">LOG IN</button></div>
                  </div>
                </form>
                <a class="mt-3" href="#/auth/forgot-password">Forgot Password?</a>
              </div>
              <div class="_20ekvB_YEU">
                <p>Don't have an account on Pexcel?</p>
                <p><a class="btn btn-primary btn-xl btn-block" href="#/auth/register">Sign Up Now</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default Login;