import React from "react";
// import './Airtime.css';

const Electricity = (props) => {
  return (
    <div className="col-lg-6 bg-green bg-white pb-3 pt-3">
      <h5 className="pb-1">Pay Electricity Bills</h5>
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
      <form className="Electricity">
        <div className="form-group mb-3 mt-3">
          <label style={{ color: "green" }}>Electricity Company</label>

          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-bolt"></i>
            </span>
            <select
              name="company"
              id="company"
              required=""
              className="form-control"
            >
              <option value="">-- Select Company --</option>
              <option value="25">Jos Electricity Postpaid</option>
              <option value="28">Kaduna Electricity Prepaid</option>
              <option value="39">Enugu Postpaid</option>
              <option value="47">Kano Electricity Postpaid</option>
              <option value="49">Kano Electricity Prepaid</option>
              <option value="55">Benin Electricity Postpaid</option>
              <option value="57">Benin Electricity Prepaid</option>
              <option value="59">Yola Electricity Postpaid</option>
              <option value="45">Abuja Prepaid</option>
              <option value="43">Abuja Postpaid</option>
              <option value="61">Yola Electricity Prepaid</option>
              <option value="53">Ikeja Disco Token Vending</option>
              <option value="51">Ikeja Disco Bill Payment</option>
              <option value="37">Port Harcourt Prepaid</option>
              <option value="24">Ibadan Disco Prepaid</option>
              <option value="27">Jos Electricity Prepaid</option>
              <option value="41">Enugu Prepaid</option>
              <option value="30">Eko Electricity Prepaid</option>
              <option value="34">Port Harcourt Postpaid</option>
              <option value="32">Ibadan Disco Postpaid</option>
            </select>
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>Select Meter Type</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-plug"></i>
            </span>

            <select
              name="network"
              autofocus=""
              className="form-control network"
              id="network"
              required=""
            >
              <option value="" selected="">
                Prepaid
              </option>
              <option value="prepaid">Prepaid</option>
              <option value="postpaid">Postpaid</option>
            </select>
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>Meter Number</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              <i className="fa-solid fa-hashtag"></i>
            </span>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Meter Number"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>Amount</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              &#x20A6;
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Amount"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>
            Price{" "}
            <span style={{ color: "red", fontWeight: "bold" }}>
              (<span id="discount">0</span>% Discount)
            </span>{" "}
          </label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              &#8358;
            </span>
            <input
              type="number"
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

export default Electricity;
