import React from 'react';
import {Link} from 'react-router-dom';

const AirtimeSidebar = (props) => {
  return (
    <div className="col-lg-3 d-none d-md-none d-lg-block d-flex px-4">
    <div class="_3abDRYJT3P" style={{background: 'white', width: "260px", position: "fixed", height: '80%'}}>
      <div class="E5MFBHsCyR">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb"></ol>
        </nav>
        <h5>Airtime and Data</h5>
      </div>
      <div class="_1oWtj0JrTa">
        <p>All Subcategories</p>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>MTN Airtime</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>Airtel Data</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>GLO Data</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>Airtel Airtime</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>9Mobile Data</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>MTN Data</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>GLO Airtime</span></Link></div>
        </div>
        <div>
          <div class="_2_XPuXuhdw"><Link to="#"><i class="fas fa-list"></i><span>9Mobile Airtime</span></Link></div>
        </div>
      </div>
      <div class="_2pTwXAVqNQ">
        <div class="_1v_ayYi5wJ">
          <p>Sort By:</p>
          <select class="form-control cushrefm-select">
            <option value="Most Popular">Most Popular</option>
            <option value="Price (High)">Price (High)</option>
            <option value="Price (Low)">Price (Low)</option>
            <option value="Delivery Date">Delivery Date</option>
            <option value="New Arrivals">New Arrivals</option>
            <option value="What You Like">What You Like</option>
          </select>
        </div>
      </div>
    </div>
  </div>

  );
}

export default AirtimeSidebar;