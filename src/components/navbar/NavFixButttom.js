import React from 'react';
import {Link} from 'react-router-dom';

function NavFixButttom(props) {
  return (
    <div class="tVoVPeecLx">
    <div class="_8ggVqMM096">
      <div class="_3vzLzuRMaE">
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
            <Link aria-current="page" class="_3P7_v2KK2Y" to="/">
              <div class="_37uyQdCwuU">
                <i class="fa fa-home" style={{fontSize: "20px"}}></i>
                <p>Home</p>
              </div>
            </Link>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
          <Link to='/airtime'>
            <div class="_37uyQdCwuU">
              <i class="fa fa-signal" style={{fontSize: "20px"}}></i>
              <p>Airtime</p>
            </div>
          </Link>
          </div>
          <div class="_1sQ3lMfC9G" style={{width: "10px", height: "10px", top: "10px", right: "2px"}}>
            <div class="_3-trAnZJ_7"></div>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
          <Link to='/social' data-bs-toggle="modal" data-bs-target="#SocialMenuModal">
            <div class="null _37uyQdCwuU">
              <i class="fa fa-thumbs-up" style={{fontSize: "20px"}}></i>
              <p>Go Social</p>
            </div>
          </Link>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
            <Link to='/market' data-bs-toggle="modal" data-bs-target="#MarketMenuModal">
              <div class="null _37uyQdCwuU">
                <i class="fa fa-store" style={{fontSize: "20px"}}></i>
                <p>Market</p>
              </div>
            </Link>
          </div>
          <div class="_1sQ3lMfC9G" style={{width: "12px", height: "12px", top: "10px", right: "2px"}}>
            <div class="_3-trAnZJ_7"></div>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
            <Link to="/more">
              <div class="_37uyQdCwuU">
                <i class="fa fa-list" style={{fontSize: "20px"}}></i>
                <p>More</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NavFixButttom;