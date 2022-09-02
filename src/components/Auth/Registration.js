import React from 'react';

function Registration(props) {
  return (
    <div className='register'>
      <div className="container">
        <div className="row">
          <div className="col-10">

            <div className="logo">
              <div className="logo-img">
                <img src="" alt="" />
              </div>

              <div className="text">Creating an account with us is easy, it takes less than a minute.</div>
            </div>

            <form action="" autoComplete='off'>
              <div className="row">
                <div className="col-4">
                  <select className="form-select" name="" id="">
                    <option selected>Free Plan</option>
                    <option value="1">Free Plan</option>
                    <option value="2">Reseller Plan (1000)</option>
                  </select>
                </div>
              </div>

              <div className="row">
                <div className="col-4 d-flex flex-column form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">
                      <span className="fa fa-user"></span>
                    </span>
                  </div>
                  <label for='first_name'>First Name</label>
                  <span className='d-flex'><i className='fa fa-user'></i> <input type="text" name="first_name" id="first_name" placeholder='enter first name' className='form-control'/></span>
                </div>

                <div className="col-4 d-flex flex-column">
                  <label for='last_name'>Last Name</label>
                  <input type="text" name="last_name" id="last_name" placeholder='enter last name' className='form-control'/>       
                </div>

                <div className='col-4 d-flex flex-column'>
                  <label for='phone_number'>Phone Number</label>
                  <input type="text" name="first_name" id="phone_number" placeholder='enter phone number' className='form-control'/>
                </div>
              </div>


              <div className="row">
                <div className="col-6 d-flex flex-column">
                  <label for='email'>Email</label>
                  <input type="email" name='email' id='email' placeholder='enter email' className='form-control' />
                </div>

                <div className="col-6 d-flex flex-column">
                  <label for='username'>Username</label>
                  <input type="text" placeholder='enter username' name='username' id='username' className='form-control'/>
                </div>
              </div>


              <div className="row">
                <div className="col-4 d-flex flex-column">
                  <label for='password'>Password</label>
                  <input type="password" placeholder='enter password' name='password' id='password' className='form-control'/>
                </div>
                <div className="col-4 d-flex flex-column">
                  <label for='confirm_password'>Confirm Password</label>
                  <input type="password" placeholder='re-enter password' id='confirm_password' name='confirm_password' className='form-control'/>
                </div>
              </div>
              
              <div className="create-account">
                <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">SIGN UP</button></div>
              </div>

              <div class="_2VSNSgUFcO">
                <p>Already have an account on PexcelService</p>
                <p><a class="btn btn-primary btn-xl btn-block" href="#/auth/login">Log In Now</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Registration;