import React from 'react';
import { social, earn } from '../../assets';
import {Link}from 'react-router-dom';


const SocialModal = (props) => {
  return (
    <>
    
      <div id="SocialMenuModal" className="modal fade .show" tabIndex="-1" role="dialog" aria-labelledby="SocialMenuModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="_1Ke6CuvM7B modal-content">
          <div id=".SocialMenuModalBody" className="_2utG0cqx22 modal-body">
              <button className="n8qbaM6QCa" data-bs-dismiss="modal"><span aria-hidden='true' className="fas fa-times" ></span></button>
              <div className="_1R8FOkFWxE d-flex flex-column align-items-center">
                <div className="_3btMEYQwM9">
                  <h4>What do you want to do today?</h4>
                </div>
                <div className="container-fluid">
                  <div className="row no-gutters">
                    <div className="col-6 mb-2">
                      <div className="_238wGi-h_V mr-2">
                        <div className="_1Tka1Kax8q">
                          <h6 className='text-center'>Blog</h6>
                        </div>
                        <div className="ma8FYDNBdm">
                          <div className="vkCa8AmEEr"><img alt="social-icon" src={social} /></div>
                          <p className="f-10">Get Real Followers, Likes, Comments, Shares, Retweets, App Reviews, Whatsapp Views etc. on your social media.</p>
                        </div>
                        <div className="_1y-DPoKFhx">
                          <Link to='/blog'><p><button className="btn btn-outline mb-1" data-bs-dismiss="modal">GET STARTED</button></p></Link>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 mb-2">
                      <div className="_238wGi-h_V">
                        <div className="_1Tka1Kax8q">
                          <h6 className='text-center'>Referrer</h6>
                        </div>
                        <div className="ma8FYDNBdm">
                          <div className="vkCa8AmEEr"><img alt="social-icon" src={earn} /></div>
                          <p className="f-10">Earn Daily by performing social tasks such as Follow, Like, Comment, Share, Retweet, App Reviews, Whatsapp Post etc.</p>
                        </div>
                        <div className="_1y-DPoKFhx">
                          <Link to='/referral'><p><button className="btn btn-outline mb-1" data-bs-dismiss="modal">GET STARTED</button></p></Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  </>

  );
}

export default SocialModal;