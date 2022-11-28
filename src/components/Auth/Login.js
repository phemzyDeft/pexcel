// import axios from 'axios';
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import "./auth.css";

const Login = (props) => {
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

                  <p className="text-muted mb-2 mt-3">Login to your account.</p>
                </div>

                {/*  Display error and messages */}
                <div></div>
                {/*-- End Display error and messages */}

                <form className="Login">
                  <input type="hidden" />

                  <div className="row">
                    <div className="col-md-12 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_username">Username</label>
                        <input
                          type="text"
                          autofocus=""
                          placeholder="Enter username here"
                          className="form-control"
                          required=""
                          id="id_username"
                        />
                      </div>
                    </div>

                    <div className="col-md-12 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_password">Password</label>
                        <input
                          type="password"
                          placeholder="Enter password here"
                          className="form-control"
                          required=""
                          id="id_password"
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
                        SIGN IN
                      </button>
                    </div>
                  </div>
                </form>

                <div className="row mt-3">
                  <div className="col-12 text-center mb-3">
                    <p className="text-center">
                      <button className="text-black ml-">
                        <Link to="/forgotpassword">
                          <b>Forgot your password?</b>
                        </Link>
                      </button>
                    </p>
                  </div>{" "}
                  {/*-- end col */}
                  <div className="col-12 text-center">
                    <p className="">
                      Don't have an account?{" "}
                      <button className="text-black ml-1">
                        <Link to="/register">
                          <b>Create Account</b>
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

export default Login;
