import React from 'react';
import { instagram, twitter, youtube,  } from '../../assets';
import {Link} from 'react-router-dom';


const RightSideBar = (props) => {
  return (  
    <div className=".col-md-4 .col-lg-3 col-xl-3 .d-none .d-md-block">
    <div className='' style={{width: "280px", position: "fixed", height: '70%'}}>
    <div className="_1kMqXwfg5O">
      <div className="_11UHTgcafn">
        <h4>Recent Activities</h4>
        <p>See what people are doing on Pexcelservices</p>
      </div>
      <div className="_3Y_reKNrY7">
        <div id="showActivities" className="_2e24fyrGqP">
          <div className="HDrM5yh-5L">
            <div>
              <div className="_5uGUhiNY0y null null" style={{width: "36px", height: "36px"}}><img src={instagram} alt='' style={{width: "36px", height: "36px"}} /></div>
            </div>
            <div className="_2hdwsRooS_">
              <div className="_2JBTDCPlOC">
                <p>@samuelsomto from <b>Idemili North, Anambra</b> just earned <b>₦3</b> for following a page or account on Instagram</p>
              </div>
            </div>
          </div>
          <div className="HDrM5yh-5L">
            <div>
              <div className="_5uGUhiNY0y null null" style={{width: "36px", height: "36px"}}><img src={twitter} alt='' style={{width: "36px", height: "36px"}} /></div>
            </div>
            <div className="_2hdwsRooS_">
              <div className="_2JBTDCPlOC">
                <p>@nkrobert from <b>Lafia, Nasarawa</b> just earned <b>₦3</b> for following a page or account on Tiktok</p>
              </div>
            </div>
          </div>
          <div className="HDrM5yh-5L">
            <div>
              <div className="_5uGUhiNY0y null null" style={{width: "36px", height: "36px"}}><img src={youtube} alt='' style={{width: "36px", height: "36px"}} /></div>
            </div>
            <div className="_2hdwsRooS_">
              <div className="_2JBTDCPlOC">
                <p>@chikaperpy from <b>Ikpoba Okha, Edo</b> just earned <b>₦3</b> for liking a page on Facebook</p>
              </div>
            </div>
          </div>
          <div className="HDrM5yh-5L">
            <div>
              <div className="_5uGUhiNY0y null null" style={{width: "36px", height: "36px"}}><img src={instagram} alt='' style={{width: "36px", height: "36px"}} /></div>
            </div>
            <div className="_2hdwsRooS_">
              <div className="_2JBTDCPlOC">
                <p>@kennyfolex from <b>Badagry, Lagos</b> just earned <b>₦3</b> for following a page or account on Instagram</p>
              </div>
            </div>
          </div>
          <div className="HDrM5yh-5L">
            <div>
              <div className="_5uGUhiNY0y null null" style={{width: "36px", height: "36px"}}><img src={twitter} alt='' style={{width: "36px", height: "36px"}} /></div>
            </div>
            <div className="_2hdwsRooS_">
              <div className="_2JBTDCPlOC">
                <p>@born2reign001 from <b>Ikorodu, Lagos</b> just earned <b>₦3</b> for following a page or account on Instagram</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="_2ekqb6o0Qj"><Link to="/">View More <span className="fa fa-chevron-down"></span></Link></div>
      </div>
    </div>
    </div>
  );
}

export default RightSideBar;