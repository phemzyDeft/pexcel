import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";

const ForgetPassword = (props) => {
  return (
    <div className="account-pages .mt-5 .mb-5 .pt-5">
      <div className=".container">
        <div className="row justify-content-center">
          <div className=".col-md-5">
            <div className="card bg-pattern">
              <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                  <button>
                    <span>
                      <img src={logo} alt="Logo" height="50px" />
                    </span>
                  </button>

                  <p className="text-muted mb-2 mt-3">Reset Password.</p>
                </div>

                {/*  Display error and messages */}
                <div></div>
                {/*-- End Display error and messages */}

                <form method="POST">
                  <input
                    type="hidden"
                    name="csrfmiddlewaretoken"
                    value="mesV4IdkTQXsuSm79ioQMoBuB6h1gAi6h6pYnO498sLUUl5puxhGaG6FgfvwXjeu"
                  />

                  <div className="row">
                    <div className="col-md-12 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_username">Email</label>
                        <input
                          type="email"
                          name="email"
                          autofocus=""
                          placeholder="Enter your email to for reset password"
                          className="form-control"
                          required=""
                          id="id_username"
                        />
                      </div>
                    </div>
                  </div>

                  {/* <div>{message ? <p>{message}</p>: null}</div> */}

                  <div className="form-group mb-0 text-center pt-4 col-12">
                    <div className="col-sm-12">
                      <button
                        className="_3ApY6Q53at btn btn-block btn-coloured-heavy"
                        type="submit"
                      >
                        PROCEED
                      </button>
                    </div>
                  </div>
                </form>

                <div className="row mt-3">
                  <div className="col-12 text-center mb-3">
                    <p className="text-center">
                      <button className="text-black ml-">
                        <Link to="/login">
                          <b>back to login</b>
                        </Link>
                      </button>
                    </p>
                  </div>{" "}
                  {/*-- end col */}
                </div>
                {/*-- end row */}
              </div>{" "}
              {/*-- end card-body */}
            </div>
            {/*-- end card */}
          </div>{" "}
          {/*-- end col */}
        </div>
        {/*-- end row */}
      </div>
      {/*-- end container */}
    </div>
  );
};

export default ForgetPassword;
