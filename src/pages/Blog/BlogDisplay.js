import React from 'react';
// import { Link } from 'react-router-dom';
import { twitter, youtube, whatsapp, instagram } from '../../assets';
import {useNavigate} from 'react-router-dom';

function BlogDisplay(props) {
  const navigate = useNavigate();
  return (
    <>
        <div className='pr-md-0 col-md-8 col-lg-6 bg-white'>

          <div className="_1k7rNH2IaX undefined ">
            <div className="_3AimTL0srH">
              <div className="_3hNNR1_9TU">
                <button onClick={()=>navigate(-1)} className="Hik1431SkT "><i className="fas fa-chevron-left"></i></button>
                <div className="_1hRRHbR2ht">
                  <h4>Advertise on Social Media</h4>
                  <p>Click <a href="#/social/orders">here</a> to see and monitor your past orders and adverts</p>
                </div>
              </div>
            </div>
          </div>
          <div className="_1j1Y2uDJtw">
            <p>Get people with atleast 1000 active followers to repost your adverts and perform certain social tasks for you on their social media accounts. Select the type of task you want people to perform below:</p>
          </div>
          <a href='/social/advertise' className="_1zsjzLdkTO">
            <div className="_3RFsgC6sjq"><img src={twitter} alt="icon" /></div>
            <div className="_1Zkvm9fWrt">
              <div className="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p className="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </a>
          <a href='/social/advertise' className="_1zsjzLdkTO">
            <div className="_3RFsgC6sjq"><img src={youtube} alt="icon" /></div>
            <div className="_1Zkvm9fWrt">
              <div className="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p className="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </a>
          <a href='/social/advertise' className="_1zsjzLdkTO">
            <div className="_3RFsgC6sjq"><img src={whatsapp} alt="icon" /></div>
            <div className="_1Zkvm9fWrt">
              <div className="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p className="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </a>
          <a href='/social/advertise' className="_1zsjzLdkTO">
            <div className="_3RFsgC6sjq"><img src={twitter} alt="icon" /></div>
            <div className="_1Zkvm9fWrt">
              <div className="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p className="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </a>
          <a href='/social/advertise' className="_1zsjzLdkTO">
            <div className="_3RFsgC6sjq"><img src={whatsapp} alt="icon" /></div>
            <div className="_1Zkvm9fWrt">
              <div className="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p className="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </a>
          <a href='/social/advertise' className="_1zsjzLdkTO">
            <div className="_3RFsgC6sjq"><img src={instagram} alt="icon" /></div>
            <div className="_1Zkvm9fWrt">
              <div className="_2Psm6UECiE">
                <h4>Get Real People to Follow Your Page on Social Media</h4>
                <p className="f-12">Pricing: <b>₦5 per Follow</b></p>
              </div>
              <p>Get Real and Authentic users with active engagements to follow your social media pages. We DO NOT allow fake users or bots to follow accounts.</p>            
            </div>
                
          </a>

            
          </div>
    </>
  );
}

export default BlogDisplay;