import React from 'react';
import AirtimeSidebar from '../Airtime/AirtimeSidebar';
import { earn, google_play, hand, market, subscription } from '../../assets';


const Sidebar = (props) => {

  return (
    <div className="._2k98P6lVWa">
    <div className="_21chLI4xNG bg-white" style={{width: "280px", position: "fixed", height: '80%'}}>
      <div className="._3QvZFAvtpk">
        <div>
          <div className="_11PWIxa7sR">
            <div className="_2zRk7HyIM2">
              <AirtimeSidebar />
              <div className="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div className="_3J87aHBaCs">
                    <div className="ud7QCJoyU6">
                      <div className="_1hrHQwVWFY">
                        <div className="_1wbTpsTsPs align-items-start" ><img src={earn} alt=''/></div>
                      </div>
                    </div>
                    <div className="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div className="_3J87aHBaCs">
                    <div className="ud7QCJoyU6">
                      <div className="_1hrHQwVWFY">
                        <div className="_1wbTpsTsPs align-items-start" ><img src={market} alt=''/></div>
                      </div>
                    </div>
                    <div className="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div className="_3J87aHBaCs">
                    <div className="ud7QCJoyU6">
                      <div className="_1hrHQwVWFY">
                        <div className="_1wbTpsTsPs align-items-start" ><img src={subscription} alt=''/></div>
                      </div>
                    </div>
                    <div className="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div className="_3J87aHBaCs">
                    <div className="ud7QCJoyU6">
                      <div className="_1hrHQwVWFY">
                        <div className="_1wbTpsTsPs align-items-start" ><img src={hand} alt=''/></div>
                      </div>
                    </div>
                    <div className="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>
            <div className="_2U5oUBl1ux">
              <p>Download the Hawkit Mobile App today and Enjoy a Seamless Experience with Instant Notifications</p>
            </div>
          </div>
        </div>
      </div>
        <div className="_3G7L5Lphh_"><a href="https://play.google.com/store/apps/details?id=com.cheapestdatabundles.pexcel" className="mr-1" target='_blank' rel="noopener noreferrer"><img src={google_play} alt="google-play-store" /></a>
        {/* <a href="https://play.google.com/store/apps/details?id=com.cheapestdatabundles.pexcel" className="h-100" target='_blank'><img src={apple_play} alt="apple-play-store" /></a>*/}</div>
    </div>
  </div>
  );
}

export default Sidebar;