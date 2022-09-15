import React from 'react';
import { Link } from 'react-router-dom';
import instagram from '../../assets/instagram.jpg';
import twitter from '../../assets/twitter.png';
import youtube from '../../assets/youtube.jpg';
import whatsapp from '../../assets/whatsapp.png';
import {useNavigate} from 'react-router-dom';

function SocialTaskandEarn(props) {
  const navigate = useNavigate();
  return (
    <>
        <div className='pr-md-0 col-md-8 col-lg-6 bg-white'>

          <div class="_1k7rNH2IaX undefined ">
            <div class="_3AimTL0srH">
              <div class="_3hNNR1_9TU">
                <button onClick={()=>navigate(-1)} class="Hik1431SkT "><i class="fas fa-chevron-left"></i></button>
                <div class="_1hRRHbR2ht">
                  <h4>Perform Social Task and Earn</h4>
                  <p>Click <Link to="#/social/orders">here</Link> to see and monitor your past orders and adverts</p>
                </div>
              </div>
            </div>
          </div>
          <div class="_1j1Y2uDJtw">
            <p>Get people with atleast 1000 active followers to repost your adverts and perform certain social tasks for you on their social media accounts. Select the type of task you want people to perform below:</p>
          </div>
          <Link to='/social/earn' class="_1zsjzLdkTO">
            <div class="_3RFsgC6sjq"><img src={twitter} alt="icon" /></div>
            <div class="_1Zkvm9fWrt">
              <div class="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p class="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </Link>
          <Link to='/social/earn' class="_1zsjzLdkTO">
            <div class="_3RFsgC6sjq"><img src={youtube} alt="icon" /></div>
            <div class="_1Zkvm9fWrt">
              <div class="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p class="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </Link>
          <Link to='/social/earn' class="_1zsjzLdkTO">
            <div class="_3RFsgC6sjq"><img src={whatsapp} alt="icon" /></div>
            <div class="_1Zkvm9fWrt">
              <div class="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p class="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </Link>
          <Link to='/social/earn' class="_1zsjzLdkTO">
            <div class="_3RFsgC6sjq"><img src={twitter} alt="icon" /></div>
            <div class="_1Zkvm9fWrt">
              <div class="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p class="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </Link>
          <Link to='/social/earn' class="_1zsjzLdkTO">
            <div class="_3RFsgC6sjq"><img src={whatsapp} alt="icon" /></div>
            <div class="_1Zkvm9fWrt">
              <div class="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p class="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </Link>
          <Link to='/social/earn' class="_1zsjzLdkTO">
            <div class="_3RFsgC6sjq"><img src={instagram} alt="icon" /></div>
            <div class="_1Zkvm9fWrt">
              <div class="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p class="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </Link>

            
          </div>
    </>
  );
}

export default SocialTaskandEarn;