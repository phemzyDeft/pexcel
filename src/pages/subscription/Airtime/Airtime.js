import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { build_callback_url } from "../../../utils/Utils";
import "./Airtime.css";

const Airtime = (props) => {
  const base_url = process.env.REACT_APP_BASE_URL;

  const [loading, setLoading] = useState(false);
  const [phone_numbers, setphone_numbers] = useState([]);
  const [airtimeForm, setAirtimeForm] = useState({
    amount: "",
    callback_url: build_callback_url("paystack"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAirtimeForm({ ...airtimeForm, [name]: value });
    console.log(name);
    console.log(value);
  };

  const navigate = useNavigate();
  const buyAirtime = async (e) => {
    e.preventDefault();

    try {
      const payload = {
        airtimeForm,
        phone_numbers,
      };
      setLoading(true);
      const req = await axios.post(`${base_url}/airtime/buy-airtime`, payload);
      const res = await req.data;
      console.log(res);
      navigate("paystack.com");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  return (
    <div className="col-lg-6 bg-green bg-white pb-3 pt-3">
      <h5 className="pb-1">Buy Airtime/VTU</h5>
      <hr />

      <p className="header-title1 pb-2">Balance: ₦0.00</p>

      <div className="d-flex justify-content-start">
        <button
          type="button"
          className="btn btn-primary button position-relative me-3"
        >
          pending
          <br />
          (1,000,000)
        </button>
        <button
          type="button"
          className="btn button btn-primary position-relative me-3"
        >
          In Process
          <br />
          (1,000,000)
        </button>
        <button
          type="button"
          className="btn button btn-primary position-relative me-2"
        >
          Successful
        </button>
      </div>

      <div></div>
      <form className="Airtime" onSubmit={buyAirtime}>
        <div className="form-group mb-3 mt-3">
          <label style={{ color: "green" }}>Select Network</label>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-wifi"></i>
            </span>
            <select
              name="network"
              autofocus=""
              className="form-control network"
              id="network"
              required=""
            >
              <option value="" selected="">
                ---------
              </option>
              <option value="mtn">MTN</option>
              <option value="airtel">AirTel</option>
              <option value="glo">GLO</option>
              <option value="9mobile">9mobile</option>
              <option value="mtn awuufu 500%">MTN AWUUFU 500%</option>
              <option value="glo epin">GLO EPIN</option>
            </select>
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>Amount to Purchase</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              &#8358;
            </span>
            <input
              type="text"
              className="form-control"
              readOnly=""
              placeholder="Select Network First"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>
            Amount to Pay{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              (<span id="discount">0</span>% Discount)
            </span>{" "}
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              &#8358;
            </span>
            <input
              type="text"
              className="form-control"
              readOnly=""
              placeholder="0"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>
            Phone Number <small>(example: 08012345678)</small>{" "}
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-mobile"></i>
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Phone Number"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="form-group">
          {/* <a href="/dashboard/fund-wallet/" id="insufficient" hidden="">
      <button type="button" className="btn btn-danger btn-block">
      Insufficient balance for this plan.<br />Click here to add money to your wallet.
      </button>
      </a> */}
          <div className="form-group mb-0 text-center col-12">
            <div className="col-sm-12">
              <button
                className="_3ApY6Q53at btn btn-block btn-coloured-heavy"
                type="submit"
              >
                PROCEED
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Airtime;
