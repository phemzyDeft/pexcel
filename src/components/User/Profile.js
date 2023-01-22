import React from "react";

const Profile = (props) => {
  return (
    <div className="pr-md-0 pl-md-0 col-md-4 col-lg-3">
      <div className="JggguqQTQ-">
        <div
          className="_21chLI4xNG"
          style={{
            width: "284.156px",
            height: "calc(100vh - 60px)",
            position: "fixed",
            top: "calc(60px)",
          }}
        >
          <div id="imageModal" className="_3Ca1S7_kil">
            <span id="close" className="_2sCjPNWaE9">
              ×
            </span>
            <img className="mBLGfIP0c6" id="img" alt="" />
            <div className="_1g2QtHMw5j" id="caption"></div>
          </div>
          <div className="_1B6G-XBO14">
            <div className="_2Hj0GkViZT">
              <div className="_3l7EL7v4ct">
                <img src="./static/media/no_user.185543af.png" alt="user" />
              </div>
              <div className="_9MsJSW74MG">
                <div>
                  <span className="GUi1joTwR_">
                    <span className="fal fa-star"></span>
                    <span className="fal fa-star"></span>
                    <span className="fal fa-star"></span>
                    <span className="fal fa-star"></span>
                    <span className="fal fa-star"></span>
                  </span>
                  <span className="_3O7DapeB2I">0.0</span>
                </div>
                <h4>janet</h4>
                <p>@janetpexcel</p>
                <div className="_1fHQpG32Pf">
                  <a className="btn btn-xs btn-outline" href="#/settings">
                    <i className="fal fa-cog"></i> Account Settings
                  </a>
                </div>
                <div className="_1Pd5ZHcxwb">
                  <p>
                    <span className="text-success">
                      <i className="fas fa-check-circle"></i>
                    </span>{" "}
                    <b>Online</b>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="_2BpQgI-9TI">
            <p className="f-12">My Shopping Wallet</p>
            <h3 className="mb-2">₦0.00</h3>
            <p>
              <a className="btn btn-xs btn-outline mr-1" href="#/funding">
                <i className="fas fa-mobile-alt"></i> Fund Wallet
              </a>
              <a className="btn btn-xs btn-outline" href="#/withdraw">
                <i className="fas fa-mobile-alt"></i> Withdraw
              </a>
            </p>
          </div>
          <div className="_5iH_mygQ9_">
            <a className="_36BkJi9u-d" href="/">
              <div className="_2e47d_GdjP">
                <h4>0</h4>
                <p>Referrals</p>
              </div>
            </a>
            <a className="_36BkJi9u-d" href="/">
              <div className="_2e47d_GdjP">
                <h4>2</h4>
                <p>Followers</p>
              </div>
            </a>
            <a className="_36BkJi9u-d" href="/">
              <div className="_2e47d_GdjP">
                <h4>0</h4>
                <p>Following</p>
              </div>
            </a>
          </div>
          <div className="_1NuhRvZuE7">
            <div className="_311g1YISTI">
              <p>Add a short bio to tell people more about yourself.</p>
              <a href="#/settings/profile">Add Bio</a>
            </div>
            <div className="_3YPmy454mp">
              <div className="_1KXZf7oLvd">
                <div className="_3lVqmAR_wI">
                  <span className="fas fa-map-marker-alt"></span>
                </div>
                <div className="anQY1a7BOn">
                  <p>Ede North, Osun, Nigeria</p>
                </div>
                <div className="_3hb4nEY8an">
                  <a className="mr-2" href="#/settings/location">
                    <span className="fas fa-edit"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
