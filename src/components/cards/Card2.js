import React from 'react';
import social from '../../assets/social.jpg';
import subscription from '../../assets/networks.png';
import market from '../../assets/market.png';
import avatar from '../../assets/user-avatar.png';
// import { Link } from 'react-router-dom';


const Card2 = (props) => {
  return (
<div class="_39Zy4vLNJR my-2">
  <div class="row .no-gutters">
    <div class="col-6 col-md-4 col-lg-4 col-space">
      <div class="YIySTFv4j7 .mr-2">
        <div class="_202LTVcvxL">
          <h6 className='text-center'>Perform Social Tasks and Earn Daily</h6>
        </div>
        <div class="q90qNgxiaP">
          <div class="_2PcF9c6mzt"><img alt="social-icon" src={social} /></div>
          <p class="f-10">Earn Daily by performing social tasks such as Follow, Like, Comment, Share, Retweet, App Reviews, Whatsapp Post etc.</p>
        </div>
        <div class="_3VOh5h7691">
          <p><a class="btn btn-outline mb-1" href="#/social/tasks">GET STARTED</a></p>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-4 col-lg-4 col-space">
      <div class="YIySTFv4j7 mr-sm-2">
        <div class="_202LTVcvxL">
          <h6 className='text-center'>Boost Your Social Portfolio</h6>
        </div>
        <div class="q90qNgxiaP">
          <div class="_2PcF9c6mzt"><img alt="social-icon" src={social} /></div>
          <p class="f-10">Get Real Followers, Likes, Comments, Shares, Retweets, App Reviews, Whatsapp Views etc. on your social media.</p>
        </div>
        <div class="_3VOh5h7691">
          <p><a class="btn btn-outline mb-1" href="#/social/buy/pricing">GET STARTED</a></p>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-4 col-lg-4 col-space">
      <div class="YIySTFv4j7 mr-2 mr-sm-0">
        <div class="_202LTVcvxL">
          <h6 className='text-center'>Start Your Airtime/Data Business</h6>
        </div>
        <div class="q90qNgxiaP">
          <div class="_2PcF9c6mzt"><img alt="airtime-icon" src={subscription} /></div>
          <p class="f-10">Buy Airtime or Data on Hawkit at up to 10% Discount and Sell to friends and family at normal prices</p>
        </div>
        <div class="_3VOh5h7691">
          <p><a class="btn btn-outline mb-1" href="#/airtime">GET STARTED</a></p>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-4 col-lg-4 col-space">
      <div class="YIySTFv4j7 mr-sm-2">
        <div class="_202LTVcvxL">
          <h6 className='text-center'>Buy and Sell Anything on Hawkit Market</h6>
        </div>
        <div class="q90qNgxiaP">
          <div class="_2PcF9c6mzt"><img alt="airtime-icon" src={subscription} /></div>
          <p class="f-10">Post your products and services on Hawkit Market and get thousands of buyers at your fingertips</p>
        </div>
        <div class="_3VOh5h7691">
          <p><button class="btn btn-outline mb-1">GET STARTED</button></p>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-4 col-lg-4 col-space">
      <div class="YIySTFv4j7 mr-2">
        <div class="_202LTVcvxL">
          <h6 className='text-center'>Refer and Earn Big</h6>
        </div>
        <div class="q90qNgxiaP">
          <div class="_2PcF9c6mzt"><img alt="referral-icon" src={market} /></div>
          <p class="f-10">Refer people to join Hawkit and earn ₦500 instant referral commission. You also earn 20% Commission on every transaction carried out by your referral</p>
        </div>
        <div class="_3VOh5h7691">
          <p><a class="btn btn-outline mb-1" href="#/social/referral">GET STARTED</a></p>
        </div>
      </div>
    </div>
    <div class="col-6 col-md-4 col-lg-4 col-space">
      <div class="YIySTFv4j7">
        <div class="_202LTVcvxL">
          <h6 className='text-center'>Manage Your Profile</h6>
        </div>
        <div class="q90qNgxiaP">
          <div class="_2PcF9c6mzt">
            <div class="_5uGUhiNY0y null null" style={{width: "80px", height: "80px"}}><img src={avatar} style={{width: "80px", height: "80px"}} alt='' /></div>
          </div>
          <p class="f-10">Manage and Edit your profile, View your earnings, Fund your Wallet, withdraw your funds into your bank account etc.</p>
        </div>
        <div class="_3VOh5h7691">
          <a href='/more'><p><a class="btn btn-outline mb-1" href="#/users/janetpexcel">MY PROFILE</a></p></a>
        </div>
      </div>
    </div>
  </div>
</div>

  );
}

export default Card2;