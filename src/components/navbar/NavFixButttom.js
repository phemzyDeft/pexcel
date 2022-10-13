import React from 'react';
import {Link} from 'react-router-dom';

function NavFixButttom(props) {
  return (
    <div className="tVoVPeecLx">
    <div className="_8ggVqMM096">
      <div className="_3vzLzuRMaE">
        <div className="_37UqOYFzay">
          <div className="_2ci2lv2Zbt">
            <Link aria-current="page" className="_3P7_v2KK2Y" to="/">
              <div className="_37uyQdCwuU">
                <i className="fa fa-home" style={{fontSize: "20px"}}></i>
                <p>Home</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="_37UqOYFzay">
          <div className="_2ci2lv2Zbt">
          <Link to='/menu'>
            <div className="_37uyQdCwuU">
              <i class="fa-solid fa-angles-right" style={{fontSize: "20px"}}></i>
              <p>Menu</p>
            </div>
          </Link>
          </div>
          <div className="_1sQ3lMfC9G" style={{width: "10px", height: "10px", top: "10px", right: "2px"}}>
            <div className="_3-trAnZJ_7"></div>
          </div>
        </div>
        <div className="_37UqOYFzay">
          <div className="_2ci2lv2Zbt">
          <Link to='/social' data-bs-toggle="modal" data-bs-target="#SocialMenuModal">
            <div className="null _37uyQdCwuU">
              <i className="fa fa-thumbs-up" style={{fontSize: "20px"}}></i>
              <p>Go Social</p>
            </div>
          </Link>
          </div>
        </div>
        <div className="_37UqOYFzay">
          <div className="_2ci2lv2Zbt">
            <Link to="/more">
              <div className="_37uyQdCwuU">
                <i className="fa fa-list" style={{fontSize: "20px"}}></i>
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