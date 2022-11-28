import React from "react";
import { avatar, market, subscription, social } from "../../assets";
// import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
    <div className="_39Zy4vLNJR mt-2 mb-5 pb-3 mt-lg-2 mb-lg-0 pb-lg-0 px-3 px-lg-2">
      <div className="row .no-gutters">
        <div className="col-6 col-md-4 col-lg-4 col-space">
          <div className="YIySTFv4j7 .mr-2">
            <div className="_202LTVcvxL">
              <h6 className="text-center">
                Perform Social Tasks and Earn Daily
              </h6>
            </div>
            <div className="q90qNgxiaP">
              <div className="_2PcF9c6mzt">
                <img alt="social-icon" src={social} />
              </div>
              <p className="f-10">
                Earn Daily by performing social tasks such as Follow, Like,
                Comment, Share, Retweet, App Reviews, Whatsapp Post etc.
              </p>
            </div>
            <div className="_3VOh5h7691">
              <p>
                <a className="btn btn-outline mb-1" href="#*">
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-4 col-space">
          <div className="YIySTFv4j7 mr-sm-2">
            <div className="_202LTVcvxL">
              <h6 className="text-center">Boost Your Social Portfolio</h6>
            </div>
            <div className="q90qNgxiaP">
              <div className="_2PcF9c6mzt">
                <img alt="social-icon" src={social} />
              </div>
              <p className="f-10">
                Get Real Followers, Likes, Comments, Shares, Retweets, App
                Reviews, Whatsapp Views etc. on your social media.
              </p>
            </div>
            <div className="_3VOh5h7691">
              <p>
                <a className="btn btn-outline mb-1" href="#*">
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-4 col-space">
          <div className="YIySTFv4j7 mr-2 mr-sm-0">
            <div className="_202LTVcvxL">
              <h6 className="text-center">Start Your Airtime/Data Business</h6>
            </div>
            <div className="q90qNgxiaP">
              <div className="_2PcF9c6mzt">
                <img alt="airtime-icon" src={subscription} />
              </div>
              <p className="f-10">
                Buy Airtime or Data on Hawkit at up to 10% Discount and Sell to
                friends and family at normal prices
              </p>
            </div>
            <div className="_3VOh5h7691">
              <p>
                <a className="btn btn-outline mb-1" href="#*">
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-4 col-space">
          <div className="YIySTFv4j7 mr-sm-2">
            <div className="_202LTVcvxL">
              <h6 className="text-center">
                Buy and Sell Anything on Hawkit Market
              </h6>
            </div>
            <div className="q90qNgxiaP">
              <div className="_2PcF9c6mzt">
                <img alt="airtime-icon" src={subscription} />
              </div>
              <p className="f-10">
                Post your products and services on Hawkit Market and get
                thousands of buyers at your fingertips
              </p>
            </div>
            <div className="_3VOh5h7691">
              <p>
                <button className="btn btn-outline mb-1">GET STARTED</button>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-4 col-space">
          <div className="YIySTFv4j7 mr-2">
            <div className="_202LTVcvxL">
              <h6 className="text-center">Refer and Earn Big</h6>
            </div>
            <div className="q90qNgxiaP">
              <div className="_2PcF9c6mzt">
                <img alt="referral-icon" src={market} />
              </div>
              <p className="f-10">
                Refer people to join Hawkit and earn ₦500 instant referral
                commission. You also earn 20% Commission on every transaction
                carried out by your referral
              </p>
            </div>
            <div className="_3VOh5h7691">
              <p>
                <a className="btn btn-outline mb-1" href="#*">
                  GET STARTED
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="col-6 col-md-4 col-lg-4 col-space">
          <div className="YIySTFv4j7">
            <div className="_202LTVcvxL">
              <h6 className="text-center">Manage Your Profile</h6>
            </div>
            <div className="q90qNgxiaP">
              <div className="_2PcF9c6mzt">
                <div
                  className="_5uGUhiNY0y null null"
                  style={{ width: "80px", height: "80px" }}
                >
                  <img
                    src={avatar}
                    style={{ width: "80px", height: "80px" }}
                    alt=""
                  />
                </div>
              </div>
              <p className="f-10">
                Manage and Edit your profile, View your earnings, Fund your
                Wallet, withdraw your funds into your bank account etc.
              </p>
            </div>
            <div className="_3VOh5h7691">
              <a href="/more">
                <p>
                  <a className="btn btn-outline mb-1" href="#*">
                    MY PROFILE
                  </a>
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
