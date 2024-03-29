import React from 'react';
import {Link} from 'react-router-dom';

function Referrer(props) {
  return (
<div className="pr-md-0 col-sm-8 col-lg-6 px-0"><div className="_3wYllazvID"><div className="_1jlMcXs7_l"><div className="_3RyIhJP6hH"><div className="uyH8zqqMWK "><div className="_3_W7cqpcwT"><p>My Referral Link:</p><div className="alert alert-danger mb-0 mt-1 py-1 px-3"><p className="mb-0">You must activate your account by paying a one-time membership fee of ₦1,000 before you can get your referral link and start earning. Click <Link to="/earn/member">here</Link> to see why you should pay a membership fee.</p></div></div><div className="_2bBVxQBu2i" style={{width: "545px", position: "fixed"}}><div className="_35qHWMssKt"><p>Membership Fee</p><h5>₦1,000</h5></div><div className="_96mvbL15ET"><p className="btn btn-outline"><Link to='/referral/member'>Earn as a member</Link></p></div></div><div><div className="offer-content-heading p-3 text-center">
  <h4 className="mb-0">Refer and Earn Big</h4>
</div>
<div className="offer-main-content px-3 pb-5 pb-lg-0">
  <p>
    As a member on Pexcel, you can earn two types of Referral Bonuses which
    include:
  </p>
  <ul>
    <li>
      <p>
        <b>Earn an Instant Referral Commission of ₦500</b> when you refer
        someone href become a Member on Pexcel. The more you refer, the more you
        earn.
      </p>
      <p className="font-italic mb-1">
        For Example: If you refer an average of 10 users per day, you will
        ₦5,000 per day and ₦150,000 per month from just Referral Bonuses alone.
      </p>
    </li>
    <li>
      <p>
        <b> Earn Social Boost Referral Commission of 20% of any amount paid </b>
        when you refer someone href Buy Likes, Followers, Comments, Shares,
        Whatsapp Post Views etc.
      </p>
      <p className="font-italic">
        For example, if you refer 100 users href buy 2000 likes or followers worth
        ₦10,000, you will earn ₦1,000 per user and a whooping ₦100,000
        instantly.
      </p>
    </li>
  </ul>
  <div className="p-3"></div>
</div>
</div></div></div></div></div></div>
  );
}

export default Referrer;