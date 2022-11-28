import React from 'react';
// import './Airtime.css';

const Cable = (props) => {
  return (
    <div className="col-lg-6 bg-green bg-white pb-3 pt-3">

      <h5 className='pb-1'>Pay DStv, GOtv and StarTimes Subscription</h5>
      <hr />

<p class="header-title1 pb-2">Balance: ₦0.00</p>

      <div class="d-flex justify-content-start">
        <button
          type="button"
          class="btn btn-primary button position-relative me-3"
        >
          pending
          <br />
          (1,000,000)
        </button>
        <button
          type="button"
          class="btn button btn-primary position-relative me-3"
        >
          In Process
          <br />
          (1,000,000)
        </button>
        <button
          type="button"
          class="btn button btn-primary position-relative me-2"
        >
          Successful
        </button>
      </div>
  
  <div> 
  </div>
  <form className='Cable'>
    <div class="form-group mb-3 mt-3">

      <label style={{color: "green"}}>Tv Subcription</label>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-wifi"></i></span>
        <select name="network" autofocus="" class="form-control network" id="network" required="">
          <option value="" selected="">---------</option>
          <option value="mtn">DStv</option>
          <option value="mtn">GOtv</option>
          <option value="mtn">StarTimes</option>
        </select>      
      </div> 
    </div>
    <div class="form-group mb-3 mt-3">

      <label style={{color: "green"}}>Select Package</label>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-wifi"></i></span>
        <select name="network" autofocus="" class="form-control network" id="network" required="">
          <option value="" selected=""></option>
        </select>      
      </div> 
    </div>

    <div class="form-group mb-3">
      <label style={{color: "green"}}>SmartCard/IUC Number</label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">&#8358;</span>
        <input type="number" class="form-control" placeholder="Enter SmartCard/IUC Number" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>

    <div class="form-group mb-3">
      <label style={{color: "green"}}>Amount to Pay <span style={{color: "red", fontWeight: "bold"}}>(<span id="discount">0</span>% Discount)</span> </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">&#8358;</span>
        <input type="text" class="form-control" readonly="" placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>

    <div class="form-group mb-3">
      <label style={{color: "green"}}>Phone Number <small>(example: 08012345678)</small> </label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-mobile"></i></span>
        <input type="number" class="form-control"  placeholder="Enter Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>

    <div class="form-group">
      {/* <a href="/dashboard/fund-wallet/" id="insufficient" hidden="">
      <button type="button" class="btn btn-danger btn-block">
      Insufficient balance for this plan.<br />Click here to add money to your wallet.
      </button>
      </a> */}
      <div class="form-group mb-0 text-center col-12">
        <div class="col-sm-12"><button class="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">PROCEED</button></div>
      </div>
    </div>
  </form>
</div>

  );
}

export default Cable;