import React from 'react';
import AirtimeSidebar from '../Airtime/AirtimeSidebar';
// import task from '../../assets/hand.png';
// import social from '../../assets/social.jpg';
// import subscription from '../../assets/networks.png';
// import AirtimeSidebar from '../Airtime/AirtimeSidebar';
// import {Link} from 'react-router-dom';
import { apple_play, earn, google_play, hand, market, subscription } from '../../assets';

const Sidebar = (props) => {
  return (
    <div class="._2k98P6lVWa">
    <div class="_21chLI4xNG bg-white" style={{width: "280px", position: "fixed", height: '80%'}}>
      <div class="._3QvZFAvtpk">
        <div>
          <div class="_11PWIxa7sR">
            <div class="_2zRk7HyIM2">
              <AirtimeSidebar />
              <div class="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div class="_3J87aHBaCs">
                    <div class="ud7QCJoyU6">
                      <div class="_1hrHQwVWFY">
                        <div class="_1wbTpsTsPs align-items-start" ><img src={earn} alt=''/></div>
                      </div>
                    </div>
                    <div class="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div class="_3J87aHBaCs">
                    <div class="ud7QCJoyU6">
                      <div class="_1hrHQwVWFY">
                        <div class="_1wbTpsTsPs align-items-start" ><img src={market} alt=''/></div>
                      </div>
                    </div>
                    <div class="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div class="_3J87aHBaCs">
                    <div class="ud7QCJoyU6">
                      <div class="_1hrHQwVWFY">
                        <div class="_1wbTpsTsPs align-items-start" ><img src={subscription} alt=''/></div>
                      </div>
                    </div>
                    <div class="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>
              <div class="_3P_lPbWL-z">
                <a target="" href="#/social/tasks">
                  <div class="_3J87aHBaCs">
                    <div class="ud7QCJoyU6">
                      <div class="_1hrHQwVWFY">
                        <div class="_1wbTpsTsPs align-items-start" ><img src={hand} alt=''/></div>
                      </div>
                    </div>
                    <div class="_1k1KIlYn7k">
                      <h6>Perform Social Tasks and Earn</h6>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </a>
              </div>

            </div>
            <div class="_2U5oUBl1ux">
              <p>Download the Hawkit Mobile App today and Enjoy a Seamless Experience with Instant Notifications</p>
            </div>
          </div>
        </div>
      </div>
        <div class="_3G7L5Lphh_"><a href="https://play.google.com/store/apps/details?id=com.cheapestdatabundles.pexcel" class="mr-1" target='_blank'><img src={google_play} alt="google-play-store" /></a>
        {/* <a href="https://play.google.com/store/apps/details?id=com.cheapestdatabundles.pexcel" class="h-100" target='_blank'><img src={apple_play} alt="apple-play-store" /></a>*/}</div>
    </div>
  </div>
  );
}

export default Sidebar;