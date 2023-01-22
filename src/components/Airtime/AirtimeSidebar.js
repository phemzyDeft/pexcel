import React from 'react';
import {Link} from 'react-router-dom';

const AirtimeSidebar = (props) => {
  return (
    <div className=".col-lg-3 .d-none .d-md-none .d-lg-block .d-flex px-4">
    <div className="_3abDRYJT3P">
    {/* <div className="_3abDRYJT3P" style={{background: 'white', width: "260px", position: "fixed", height: '80%'}}> */}
      <div className="E5MFBHsCyR">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb"></ol>
        </nav>
        <h5>Services</h5>
      </div>
      <div className="_1oWtj0JrTa">
        <div>
          <div className="_2_XPuXuhdw"><Link to="/airtime"><i className="fas fa-list"></i><span>Airtime Subscription</span></Link></div>
        </div>
        <div>
          <div className="_2_XPuXuhdw"><Link to="/data"><i className="fas fa-list"></i><span>Data Subscription</span></Link></div>
        </div>
        <div>
          <div className="_2_XPuXuhdw"><Link to="/cable"><i className="fas fa-list"></i><span>Cable Subscription</span></Link></div>
        </div>
        <div>
          <div className="_2_XPuXuhdw"><Link to="/electricity"><i className="fas fa-list"></i><span>Electricity</span></Link></div>
        </div>
      </div>
    </div>
  </div>

  );
}

export default AirtimeSidebar;