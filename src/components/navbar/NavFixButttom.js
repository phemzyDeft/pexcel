import React from 'react';
import {Link} from 'react-router-dom';

function NavFixButttom(props) {
  return (
    <div class="tVoVPeecLx">
    <div class="_8ggVqMM096">
      <div class="_3vzLzuRMaE">
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
            <Link to='/'>
            <Link aria-current="page" class="_3P7_v2KK2Y" to="#">
              <div class="_37uyQdCwuU">
                <i class="fa fa-home" style={{fontSize: "20px"}}></i>
                <p>Home</p>
              </div>
            </Link>
            </Link>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
          <Link to='/airtime'>
            <Link to="#/airtime">
              <div class="_37uyQdCwuU">
                <i class="fa fa-signal" style={{fontSize: "20px"}}></i>
                <p>Airtime</p>
              </div>
            </Link>
          </Link>
          </div>
          <div class="_1sQ3lMfC9G" style={{width: "10px", height: "10px", top: "10px", right: "2px"}}>
            <div class="_3-trAnZJ_7"></div>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
          <Link to='/social'>
            <Link to="/">
              <div class="null _37uyQdCwuU">
                <i class="fa fa-thumbs-up" style={{fontSize: "20px"}}></i>
                <p>Go Social</p>
              </div>
            </Link>
          </Link>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
            <Link to='/market'>
            <Link to="">
              <div class="null _37uyQdCwuU">
                <i class="fa fa-store" style={{fontSize: "20px"}}></i>
                <p>Market</p>
              </div>
            </Link>
            </Link>
          </div>
          <div class="_1sQ3lMfC9G" style={{width: "12px", height: "12px", top: "10px", right: "2px"}}>
            <div class="_3-trAnZJ_7"></div>
          </div>
        </div>
        <div class="_37UqOYFzay">
          <div class="_2ci2lv2Zbt">
            <Link to='/login'>
              <Link to="#/settings">
                <div class="_37uyQdCwuU">
                  <i class="fa fa-list" style={{fontSize: "20px"}}></i>
                  <p>More</p>
                </div>
              </Link>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default NavFixButttom;