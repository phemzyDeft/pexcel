import React, { useState, useEffect } from "react";
import "./Registration.css";
import { Link, useNavigate } from "react-router-dom";
import { logo } from "../../assets";
import axios from "axios";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { build_callback_url } from "../../utils/Utils";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Registration(props) {
  const base_url = process.env.REACT_APP_BASE_URL;
  // console.log(baseURL)

  const [toggle, settoggle] = useState(false);
  const [acc_type, setAcc_type] = useState([]);
  const [loading, setLoading] = useState(false);
  const [formData, setformData] = useState({
    account_type: "",
    callback_url: build_callback_url("dashboard"),
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
    referral_id: "",
  });

  console.log(formData);

  const [passwordMatch, setpasswordMatch] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformData({ ...formData, [name]: value });
    // alert(name)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const req = await axios.post(`${base_url}/account/register`, formData);
      const res = await req.data;
      var acceptedStatus = [200, 201];
      if (acceptedStatus.includes(req.status)) {
        toast.error(res.detail, { hideProgressBar: true, type: "success" });

        // Save token in localStorage for future usage
        var hostname = document.location.hostname;
        const data = JSON.stringify(res.data);
        localStorage.setItem(`${hostname}_data`, data);
        // toast.error(`Welcome ${res.data.first_name}`, {hideProgressBar: true, type: 'success'})

        setTimeout(() => {
          navigate("/login");
        }, 2000);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      var detail = error.response.data.detail;
      toast.dark(detail, { hideProgressBar: true, type: "error" });
    }
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(`${base_url}/settings/account-types`);
      console.log(response);
      // alert('1')
      setAcc_type(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const togglePassword = () => {
    settoggle(!toggle);
  };

  return (
    <div className="account-pages .mt-5 .mb-5">
      {loading && <p>loading...</p>}
      <ToastContainer />
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

                {/* ====== End Display error and messages===== */}
                <form onSubmit={handleSubmit} className="registered-form">
                  <div className="row">
                    <div className="col-md-4 pt-3">
                      <div>
                        <label htmlhtmlFor="id_first_name">
                          Select Account Type
                        </label>
                        <select
                          id=""
                          name="account_type"
                          value={formData.acc_type}
                          onChange={handleChange}
                          className="form-control"
                        >
                          {acc_type.results?.map((res) => {
                            const { id, name, registration_fee } = res;
                            return (
                              <option key={id} value={id} required>
                                {name} ( &#8358; {registration_fee} )
                              </option>
                            );
                          })}
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
                          placeholder="enter first name"
                          className="form-control"
                          required
                          value={formData.first_name}
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
                          required
                          value={formData.last_name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-4 pt-3">
                      <div className="form-group">
                        <label htmlhtmlFor="id_phone">Phone Number</label>
                        <input
                          type="text"
                          name="phone_number"
                          maxLength={11}
                          minLength={11}
                          placeholder="phone number"
                          className="form-control"
                          required
                          value={formData.phone_number}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 pt-3">
                      <div className="form-group">
                        <label htmlhtmlFor="id_email">Email</label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter email here"
                          className="form-control"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6 pt-3">
                      <div className="form-group">
                        <label htmlhtmlFor="id_username">Username</label>
                        <input
                          type="text"
                          name="username"
                          maxLength="20"
                          placeholder="Enter username here"
                          className="form-control"
                          required
                          id="id_username"
                          value={formData.username}
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
                        <label htmlhtmlFor="id_password1">Password</label>
                        <input
                          type={toggle ? "text" : "password"}
                          name="password"
                          minLength={6}
                          placeholder="Enter password here"
                          className="form-control"
                          required
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div
                          onClick={togglePassword}
                          className="password__icon__toggle"
                        >
                          {toggle ? (
                            <AiOutlineEyeInvisible color="blue" />
                          ) : (
                            <AiOutlineEye color="blue" />
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 pt-3">
                      <div
                        className="form-group"
                        style={{ position: "relative" }}
                      >
                        <label htmlhtmlFor="id_password2">
                          Confirm Password
                        </label>
                        <input
                          type={toggle ? "text" : "password"}
                          name="password2"
                          minLength={6}
                          placeholder="Retype password here"
                          className="form-control"
                          required
                          onChange={(e) => {
                            e.target.value !== formData.password
                              ? setpasswordMatch(true)
                              : setpasswordMatch(false);
                          }}
                        />
                        <div
                          onClick={togglePassword}
                          className="password__icon__toggle"
                        >
                          {toggle ? (
                            <AiOutlineEyeInvisible color="blue" />
                          ) : (
                            <AiOutlineEye color="blue" />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                  {passwordMatch && (
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
                        {loading ? "loading..." : "SIGN UP"}
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

        {/* <div className="footer-bothrefm mt-3">
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
        </div> */}
      </div>
      {/* === end container === */}
    </div>
  );
}

export default Registration;
