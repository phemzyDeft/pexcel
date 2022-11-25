import React from 'react';

const UpdatePassword = () => {
  return(
    <div className="Gquizgm9Y4 ">
  <div className="_1k7rNH2IaX undefined ">
    <div className="_3AimTL0srH">
      <div className="_3hNNR1_9TU">
        <button className="Hik1431SkT "><i className="fas fa-chevron-left"></i></button>
        <h4>Update Your Password</h4>
      </div>
    </div>
  </div>
  <div className="_3vqtTC4SMP">
    <div className="_3AgFe0iaSY">
      <form autoComplete="off">
        <div className="form-row">
          <div className="col-sm-12">
            <div className="form-group">
              <label>Current Password</label>
              <div className="_1StmaddT83 input-group">
                <div className="input-group-prepend"><span className="input-group-text border-0" style={{backgroundColor: "inherit"}}><span className="fa fa-lock"></span></span></div>
                <input type="password" className="_1echFS5NZD form-control border-0" placeholder="Enter your current password" autoComplete="new-password" value="" />
                <div className="input-group-append"><span className="_32iYqntMuD input-group-text border-0"><span className="fa fa-eye-slash"></span></span></div>
              </div>
            </div>
          </div>
          <div className="col-sm-12">
            <div className="form-group">
              <label>New Password</label>
              <div className="_1StmaddT83 input-group">
                <div className="input-group-prepend"><span className="input-group-text border-0" style={{backgroundColor: "inherit"}}><span className="fa fa-lock"></span></span></div>
                <input type="password" className="_1echFS5NZD form-control border-0" placeholder="Enter your new password" autoComplete="new-password" value="" />
                <div className="input-group-append"><span className="_32iYqntMuD input-group-text border-0"><span className="fa fa-eye-slash"></span></span></div>
              </div>
              <small className="form-text text-muted">Password must contain atleast 6 Characters</small>
            </div>
          </div>
          <div className="col-sm-12"><button className="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">CHANGE PASSWORD</button></div>
        </div>
      </form>
    </div>
  </div>
</div>

  );
};

export default UpdatePassword;