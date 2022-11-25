import React from 'react';
// import './Airtime.css';

const AirtimeToCash = (props) => {
  return (
    <div className="col-lg-6 bg-green bg-white pb-3 pt-3">

      <h5 className='pb-1'>Convert Airtime to Cash</h5>
      <hr />

<p className="header-title1 pb-2">Balance: ₦0.00</p>

  <div className="">
  
    <button type="button" className="btn btn-primary button position-relative me-3">
      pending
      <br />
      (1,000,000,000)
      <span hidden className="position-absolute top-10 start-10 translate-middle badge rounded-pill bg-danger">
        1,000,000,000
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>      
    <button type="button" className="btn button btn-primary position-relative me-3">
      In Process
      <br />
      (1,000,000,000)

      <span hidden className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>      
    <button type="button" className="btn button btn-primary position-relative me-2">
      Successful
      <span hidden className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        0
        <span className="visually-hidden">unread messages</span>
      </span>
    </button>
  </div>
  
  <div> 
  </div>
  <form method="POST">
    <input type="hidden" name="csrfmiddlewaretoken" value="NJrnZLR1ppaT4rbrcuk63mmqceBttTnDk6SPUDjoSBK78CJTbbzmhOp6SeabTYfA" />
    <div className="form-group mb-3 mt-3">

      <label style={{color: "green"}}>Select Network</label>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-bolt"></i></span>
        <select name="company" id="company" required="" className="form-control">
          <option value="">MTN</option>
          <option value="25">GLO</option>
          <option value="61">Airtel</option>
          <option value="53">9mobile</option>
        </select>     
      </div> 
    </div>

    <div className='form-group mb-3'>
      <label style={{color: "green"}}>How much are you sending?</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">&#x20A6;</span>
        <input type="number" className="form-control"  placeholder="Enter the amount you are sending" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>

    <div className="form-group mb-3">
      <label style={{color: "green"}}>How much you will receive?</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">&#x20A6;</span>
        <input type="text" className="form-control" readOnly  placeholder="0" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>

    <div className="form-group mb-3">
      <label style={{color: "green"}}>Phone Number (Which number are you sending from?)</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1"><i className="fa-solid fa-mobile"></i></span>
        <input type="number" className="form-control"  placeholder="Enter Phone Number" aria-label="Username" aria-describedby="basic-addon1" />
      </div>
    </div>

    <div className="form-group mb-3">
      <label style={{color: "green"}}>How do you want to get paid?</label>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">?</span>
        <select name="company" id="company" required="" className="form-control">
          <option value="">--------</option>
          <option value="25">Fund My Wallet</option>
          <option value="61">Send to Bank Account</option> 
        </select>     
      </div>
    </div>

    

    <div className="form-group">
      {/* <a href="/dashboard/fund-wallet/" id="insufficient" hidden="">
      <button type="button" className="btn btn-danger btn-block">
      Insufficient balance for this plan.<br />Click here to add money to your wallet.
      </button>
      </a> */}
      <div className="form-group mb-0 text-center col-12">
        <div className="col-sm-12"><button className="_3ApY6Q53at btn btn-block btn-coloured-heavy" type="submit">PROCEED</button></div>
      </div>
    </div>
  </form>
</div>

  );
}

export default AirtimeToCash;