import React, { useState } from "react";
import "./Registration.css";
import { Link } from "react-router-dom";
import { logo } from "../../assets";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

function Registration(props) {
  // console.log(process.env.REACT_APP_API_BASE_URL);
  // const [credentials, setCredentials] = useState();

  const baseURL = process.env.REACT_APP_API_BASE_URL;
  const [formData, setformData] = useState({
    account_type: 1,
    callback_url: "https://example.com",
  });
  const [passNotMatch, setpassNotMatch] = useState(false);
  // const [showLoader, setshowLoader] = useState(false);
  const [fetchRes, setfetchRes] = useState({
    show: false,
    message: "",
  });
  const [togglepassword, settogglepassword] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setformData((values) => ({ ...values, [name]: value }));
  };

  const processForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        `https://cors-anywhere.herokuapp.com/${baseURL}/account/register`,
        formData
      );
      setfetchRes({
        show: true,
        message: res.data.detail,
      });
      // console.log(res.data.detail);
    } catch (error) {
      setfetchRes({
        show: true,
        message: error.response.data.detail,
      });
      // console.log("Error Occured:", error.response.data.detail);
    }
  };

  const passwordToggle = () => {
    settogglepassword(!togglepassword);
  };

  return (
    <div className="account-pages .mt-5 .mb-5">
      <div className=".container .pt-5">
        <div className="row justify-content-center">
          <div className=".col-md-7">
            <div className="card bg-pattern">
              <div className="card-body p-4">
                <div className="text-center w-75 m-auto">
                  <a href="/">
                    <span>
                      <img src={logo} alt="Logo" height="50px" />
                    </span>
                  </a>
                  <p
                    className="text-muted mb-2 mt-3"
                    style={{ fontSize: ".8rem" }}
                  >
                    Creating an account with us is easy, it takes less than a
                    minute.
                  </p>
                </div>
                {/* ====== Display error and messages ======= */}
                {fetchRes.show && (
                  <div className="alert alert-info">{fetchRes.message}</div>
                )}
                {/* ====== End Display error and messages===== */}
                <form onSubmit={processForm} className="registered-form">
                  <div className="row">
                    <div className="col-md-4 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_first_name">
                          Select Account Type
                        </label>
                        <select
                          name="account_type"
                          id=""
                          className="form-control"
                          value={formData.account_type || ""}
                          onChange={handleChange}
                        >
                          <option value="0" selected>
                            Free Plan
                          </option>
                          <option value="1">Reseller Plan (₦1,000)</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-4 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_first_name">First Name</label>
                        <input
                          type="text"
                          name="first_name"
                          auhreffocus=""
                          placeholder="enter first name"
                          className="form-control"
                          required=""
                          id="id_first_name"
                          value={formData.first_name || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_last_name">Last Name</label>
                        <input
                          type="text"
                          name="last_name"
                          placeholder="enter last name"
                          className="form-control"
                          required=""
                          id="id_last_name"
                          value={formData.last_name || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_phone">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          maxLength="11"
                          minLength="11"
                          placeholder="phone number"
                          className="form-control"
                          required=""
                          id="id_phone"
                          value={formData.phone_number || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_email">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email here"
                          className="form-control"
                          required=""
                          id="id_email"
                          value={formData.email || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pt-3">
                      <div className="form-group">
                        <label htmlFor="id_username">Username</label>
                        <input
                          type="text"
                          name="username"
                          maxLength="20"
                          auhreffocus=""
                          placeholder="Enter username here"
                          className="form-control"
                          required=""
                          id="id_username"
                          value={formData.username || ""}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pt-3">
                      <div
                        className="form-group"
                        style={{ position: "relative" }}
                      >
                        <label htmlFor="id_password1">Password</label>
                        <input
                          type={togglepassword ? "text" : "password"}
                          name="password"
                          minLength="8"
                          placeholder="Enter password here"
                          className="form-control"
                          required
                          id="id_password1"
                          value={formData.password || ""}
                          onChange={handleChange}
                        />
                        <a
                          href="#*"
                          onClick={passwordToggle}
                          className="password__icon__toggle"
                        >
                          {togglepassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </a>
                      </div>
                    </div>
                    <div className="col-md-6 pt-3">
                      <div
                        className="form-group"
                        style={{ position: "relative" }}
                      >
                        <label htmlFor="id_password2">Confirm Password</label>
                        <input
                          type={togglepassword ? "text" : "password"}
                          name="password2"
                          minLength="8"
                          placeholder="Retype password here"
                          className="form-control"
                          required=""
                          id="id_password2"
                          onChange={(e) => {
                            e.target.value !== formData.password
                              ? setpassNotMatch(true)
                              : setpassNotMatch(false);
                          }}
                        />
                        <a
                          href="#*"
                          onClick={passwordToggle}
                          className="password__icon__toggle"
                        >
                          {togglepassword ? (
                            <AiOutlineEye />
                          ) : (
                            <AiOutlineEyeInvisible />
                          )}
                        </a>
                      </div>
                    </div>
                  </div>
                  {passNotMatch && (
                    <small className="text-danger">
                      Password does not match
                    </small>
                  )}
                  <div className="form-group mb-0 text-center pt-4 col-12">
                    <div className="col-sm-12">
                      <button
                        className="_3ApY6Q53at btn btn-block btn-coloured-heavy"
                        type="submit"
                      >
                        SIGN UP
                      </button>
                    </div>
                  </div>
                </form>
                <div className="row mt-3">
                  <div className="col-12 text-center">
                    <p className="">
                      Already have an account?{" "}
                      <button className="text-black ml-1">
                        <Link to="/login">
                          <b>Login</b>
                        </Link>
                      </button>
                    </p>
                  </div>
                  {/* ===== end col==== */}
                </div>
                {/* end row ==== */}
              </div>
              {/* === end card-body === */}
            </div>
            {/* === end card === */}
          </div>
          {/* === end col === */}
        </div>
        {/* === end row === */}

        <div className="footer-bothrefm mt-3">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                <span className="text-primary">.</span> Copyright &copy; 2020.
                Pexcel Global Services All rights reserved.
                <a href="https://api.whatsapp.com/send?phone=2348129974967&amp;text=Hello%20Pexcel,%20I%20Team%20">
                  <small style={{ color: "red" }}>
                    &nbsp; chat via whatsapp
                  </small>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* === end container === */}
    </div>
  );
}

export default Registration;
