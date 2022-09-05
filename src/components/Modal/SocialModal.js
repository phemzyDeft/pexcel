import React from 'react';
import social from '../../assets/social.jpg';
import earn from '../../assets/hand.png';


const SocialModal = (props) => {
  return (
<div class="_2MOY8tjzab">
  <div id="SocialMenuModal" class="modal fade show" tabindex="-1" role="dialog" aria-labelledby="" style={{display: "block", paddingRight: "17px"}}>
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="_1Ke6CuvM7B modal-content">
        <div id="SocialMenuModalBody" class="_2utG0cqx22 modal-body">
          <button class="n8qbaM6QCa"><span aria-hidden='true' class="fas fa-times"></span></button>
          <div class="_1R8FOkFWxE d-flex flex-column align-items-center">
            <div class="_3btMEYQwM9">
              <h4>What do you want to do today?</h4>
            </div>
            <div class="container-fluid">
              <div class="row no-gutters">
                <div class="col-6 mb-2">
                  <div class="_238wGi-h_V mr-2">
                    <div class="_1Tka1Kax8q">
                      <h6>Perform Social Tasks and Earn Daily</h6>
                    </div>
                    <div class="ma8FYDNBdm">
                      <div class="vkCa8AmEEr"><img alt="social-icon" src={earn} /></div>
                      <p class="f-10">Earn Daily by performing social tasks such as Follow, Like, Comment, Share, Retweet, App Reviews, Whatsapp Post etc.</p>
                    </div>
                    <div class="_1y-DPoKFhx">
                      <p><button class="btn btn-outline mb-1">GET STARTED</button></p>
                    </div>
                  </div>
                </div>
                <div class="col-6 mb-2">
                  <div class="_238wGi-h_V">
                    <div class="_1Tka1Kax8q">
                      <h6>Boost Your Social Portfolio</h6>
                    </div>
                    <div class="ma8FYDNBdm">
                      <div class="vkCa8AmEEr"><img alt="social-icon" src={social} /></div>
                      <p class="f-10">Get Real Followers, Likes, Comments, Shares, Retweets, App Reviews, Whatsapp Views etc. on your social media.</p>
                    </div>
                    <div class="_1y-DPoKFhx">
                      <p><button class="btn btn-outline mb-1">GET STARTED</button></p>
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
</div>

  );
}

export default SocialModal;