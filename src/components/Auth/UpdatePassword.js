import React from 'react';

const UpdatePassword = () => {
  return(
    <div class="Gquizgm9Y4 ">
  <div class="_1k7rNH2IaX undefined ">
    <div class="_3AimTL0srH">
      <div class="_3hNNR1_9TU">
        <button class="Hik1431SkT "><i class="fas fa-chevron-left"></i></button>
        <h4>Update Your Password</h4>
      </div>
    </div>
  </div>
  <div class="_3vqtTC4SMP">
    <div class="_3AgFe0iaSY">
      <form autocomplete="off">
        <div class="form-row">
          <div class="col-sm-12">
            <div class="form-group">
              <label>Current Password</label>
              <div class="_1StmaddT83 input-group">
                <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}><span class="fa fa-lock"></span></span></div>
                <input type="password" class="_1echFS5NZD form-control border-0" placeholder="Enter your current password" autocomplete="new-password" value="" />
                <div class="input-group-append"><span class="_32iYqntMuD input-group-text border-0"><span class="fa fa-eye-slash"></span></span></div>
              </div>
            </div>
          </div>
          <div class="col-sm-12">
            <div class="form-group">
              <label>New Password</label>
              <div class="_1StmaddT83 input-group">
                <div class="input-group-prepend"><span class="input-group-text border-0" style={{backgroundColor: "inherit"}}><span class="fa fa-lock"></span></span></div>
                <input type="password" class="_1echFS5NZD form-control border-0" placeholder="Enter your new password" autocomplete="new-password" value="" />
                <div class="input-group-append"><span class="_32iYqntMuD input-group-text border-0"><span class="fa fa-eye-slash"></span></span></div>
              </div>
              <small class="form-text text-muted">Password must contain atleast 6 Characters</small>
            </div>
          </div>
          <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">CHANGE PASSWORD</button></div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default UpdatePassword;