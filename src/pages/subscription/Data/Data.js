import React from "react";
// import './Airtime.css';

const Data = (props) => {
  return (
    <div className="col-lg-6 bg-green bg-white pb-3 pt-3">
      <h5 className="pb-1">Buy Data Bundle</h5>
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
      <form className="Data">
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          value="NJrnZLR1ppaT4rbrcuk63mmqceBttTnDk6SPUDjoSBK78CJTbbzmhOp6SeabTYfA"
        />
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
                -----Select Network----
              </option>
              <option value="mtn">MTN</option>
              <option value="mtn">MTN Data Gifting</option>
              <option value="mtn">MTN Direct (C Gifting)</option>
              <option value="airtel">AirTel</option>
              <option value="mtn">MTN C Gifting</option>
              <option value="glo">GLO</option>
              <option value="9mobile">9mobile</option>
            </select>
          </div>
        </div>
        <div className="form-group mb-3 mt-3">
          <label style={{ color: "green" }}>Select Data Plan</label>

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
            </select>
          </div>
        </div>

        <div className="form-group mb-3">
          <label style={{ color: "green" }}>Price</label>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">
              &#8358;
            </span>
            <input
              type="number"
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

export default Data;
