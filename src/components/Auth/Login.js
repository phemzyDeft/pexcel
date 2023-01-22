import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import "./auth.css";
import { toast, ToastContainer } from "react-toastify";

const Login = (props) => {
  const base_url = process.env.REACT_APP_BASE_URL;

  // const [toggle, settoggle] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setformData] = useState({
    user: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
  };

  const navigate = useNavigate();

  // const togglePassword = () => {
  //   settoggle(!toggle);
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    const url = `${base_url}/account/login`;
    const headers = {};

    try {
      setLoading(true);
      const req = await axios.post(url, formData, { headers });
      const res = await req.data;
      console.log(res);
      console.log(req.data);

      var acceptedStatus = [200, 201];
      if (acceptedStatus.includes(req.status)) {
        // Save token in localStorage for future usage
        toast.error(res.detail, { hideProgressBar: true, type: "success" });
        var hostname = document.location.hostname;
        const data = JSON.stringify(res.data);
        localStorage.setItem(`${hostname}_data`, data);
        localStorage.setItem(`${hostname}_token`, JSON.stringify(res.token));

        setTimeout(() => {
          navigate("/fundwallet");
          toast.error(`Welcome ${res.data.first_name}`, {
            hideProgressBar: true,
            type: "success",
          });
        }, 2000);
      }
      setLoading(false);
    } catch (e) {
      setLoading(false);
      const err = e.response.data.detail;
      toast.dark(err, { hideProgressBar: true, type: "error" });
      console.log(err);
    }
  };

  return (
    <div className="account-pages .mt-5 .mb-5 .pt-5">
      <ToastContainer />
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

                <form className="Login" onSubmit={handleLogin}>
                  <input type="hidden" />

                  <div className="row">
                    <div className="col-md-12 pt-3">
                      <div className="form-group">
                        <label htmlhtmlFor="id_username">Username</label>
                        <input
                          name="user"
                          type="text"
                          autofocus=""
                          placeholder="Enter username here"
                          className="form-control"
                          required=""
                          onChange={handleChange}
                          value={formData.user}
                        />
                      </div>
                    </div>

                    {loading && (
                      <div>
                        <div class="text-center">
                          <div
                            class="spinner-border text-primary"
                            role="status"
                          >
                            <span class="visually-hidden">Loading...</span>
                          </div>
                        </div>
                      </div>
                    )}
                    <div className="col-md-12 pt-3">
                      <div className="form-group">
                        <label htmlhtmlFor="id_password">Password</label>
                        <input
                          name="password"
                          type="password"
                          placeholder="Enter password here"
                          className="form-control"
                          required=""
                          onChange={handleChange}
                          value={formData.password}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group mb-0 text-center pt-4 col-12">
                    <div className="col-sm-12">
                      <button
                        className="_3ApY6Q53at btn btn-block btn-coloured-heavy"
                        type="submit"
                        disabled={loading}
                      >
                        {loading ? "loading..." : "SIGN IN"}
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
