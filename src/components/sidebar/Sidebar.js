import React from 'react';
import task from '../../assets/hand.png';
import social from '../../assets/social.jpg';
import subscription from '../../assets/networks.png';
import google_play from '../../assets/google-play.jpg';
import apple_play from '../../assets/apple-play.jpg';
import {Link} from 'react-router-dom';

const Sidebar = (props) => {
  return (
    <div className="col-3 col-md-3 col-lg-3">
    <div className='' style={{background: 'white', width: "260px", position: "fixed", overflowY: 'scroll', height: '90%'}}>

      <div class="">
          <div class="_2EjbQWOf09">
            <div class="_3D4lABzCaf">
              <h6 class="mb-2">Earn Steady Daily Figures from the Comfort of Your Phone</h6>
              <p>Simply <a href='#' style={{color: 'blue', cursor: 'pointer'}}><Link to='/login'>Log in</Link></a> or <a href='#' style={{color: 'blue', cursor: 'pointer'}}><Link to='/register'>Register</Link></a> to enjoy the amazing features on Hawkit.</p>
            </div>
          </div>
          <div>
            <div class="_11PWIxa7sR">
              <div class="_2zRk7HyIM2">
                <div class="_3P_lPbWL-z">
                  <a target="" href="#/social/tasks">
                    <div class="_3J87aHBaCs">
                      <div class="ud7QCJoyU6">
                        <div class="_1hrHQwVWFY">
                          <div class="_1wbTpsTsPs align-items-start" ><img src={social} alt="" /></div>
                        </div>
                      </div>
                      <div class="_1k1KIlYn7k">
                        <h6>Perform Social Tasks and Earn</h6>
                        <p>Earn daily income by following, liking, commenting, sharing, retweeting or posting adverts for businesses on your social media</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="_3P_lPbWL-z">
                  <a target="" href="#/social/buy/pricing">
                    <div class="_3J87aHBaCs">
                      <div class="ud7QCJoyU6">
                        <div class="_1hrHQwVWFY">
                          <div class="_1wbTpsTsPs align-items-start" ><img src={task} alt="" /></div>
                        </div>
                      </div>
                      <div class="_1k1KIlYn7k">
                        <h6>Boost Your Social Portfolio</h6>
                        <p>Get Real Followers, Likes, Comments, Shares, Retweets, Views or Reviews on your social media posts and account instantly.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="_3P_lPbWL-z">
                  <a target="" href="#/social/buy/pricing">
                    <div class="_3J87aHBaCs">
                      <div class="ud7QCJoyU6">
                        <div class="_1hrHQwVWFY">
                          <div class="_1wbTpsTsPs align-items-start" ><img src={subscription} alt="" /></div>
                        </div>
                      </div>
                      <div class="_1k1KIlYn7k">
                        <h6>Boost Your Social Portfolio</h6>
                        <p>Get Real Followers, Likes, Comments, Shares, Retweets, Views or Reviews on your social media posts and account instantly.</p>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="_3P_lPbWL-z">
                  <a target="" href="#/social/buy/pricing">
                    <div class="_3J87aHBaCs">
                      <div class="ud7QCJoyU6">
                        <div class="_1hrHQwVWFY">
                          <div class="_1wbTpsTsPs align-items-start" ><img src={task} alt="" /></div>
                        </div>
                      </div>
                      <div class="_1k1KIlYn7k">
                        <h6>Boost Your Social Portfolio</h6>
                        <p>Get Real Followers, Likes, Comments, Shares, Retweets, Views or Reviews on your social media posts and account instantly.</p>
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
        <div class="_3G7L5Lphh_"><a href="https://play.google.com/store/apps/details?id=com.app.hawkitng" class="mr-1" to="https://play.google.com/store/apps/details?id=com.app.hawkitng"><img src={google_play} alt="google-play-store" /></a><a href="https://hawkit.ng/download" class="h-100" to="https://hawkit.ng/download"><img src={apple_play} alt="apple-play-store" /></a></div>
      </div>

    </div>
  );
}

export default Sidebar;