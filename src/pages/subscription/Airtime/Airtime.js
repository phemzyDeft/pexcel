import React from 'react';
import './Airtime.css';

const Airtime = (props) => {
  return (
    <div className="col-lg-6 bg-green bg-white pb-3 pt-3">

      <h5 className='pb-1'>Buy Airtime/VTU</h5>
      <hr />

<p class="header-title1 pb-2">Balance: ₦0.00</p>

  <div class="">
  
    <button type="button" class="btn btn-primary button position-relative me-3">
      pending
      <br />
      (1,000,000,000)
      <span hidden class="position-absolute top-10 start-10 translate-middle badge rounded-pill bg-danger">
        1,000,000,000
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>      
    <button type="button" class="btn button btn-primary position-relative me-3">
      In Process
      <br />
      (1,000,000,000)

      <span hidden class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>      
    <button type="button" class="btn button btn-primary position-relative me-2">
      Successful
      <span hidden class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span class="visually-hidden">unread messages</span>
      </span>
    </button>
  </div>
  
  <div> 
  </div>
  <form method="POST">
    <input type="hidden" name="csrfmiddlewaretoken" value="NJrnZLR1ppaT4rbrcuk63mmqceBttTnDk6SPUDjoSBK78CJTbbzmhOp6SeabTYfA" />
    <div class="form-group mb-3 mt-3">

      <label style={{color: "green"}}>Select Network</label>

      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1"><i class="fa-solid fa-wifi"></i></span>
        <select name="network" autofocus="" class="form-control network" id="network" required="">
          <option value="" selected="">---------</option>
          <option value="mtn">MTN</option>
          <option value="airtel">AirTel</option>
          <option value="glo">GLO</option>
          <option value="9mobile">9mobile</option>
          <option value="mtn awuufu 500%">MTN AWUUFU 500%</option>
          <option value="glo epin">GLO EPIN</option>
        </select>      
      </div> 
    </div>

    <div class="form-group mb-3">
      <label style={{color: "green"}}>Amount to Purchase</label>
      <div class="input-group mb-3">
        <span class="input-group-text" id="basic-addon1">&#8358;</span>
        <input type="text" class="form-control" readonly="" placeholder="Select Network First" aria-label="Username" aria-describedby="basic-addon1" />
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

export default Airtime;