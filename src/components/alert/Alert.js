import React from 'react';
// import {Link} from 'react-router-dom';
const Alert = (props) => {
  return (
    <div class="alert alert-danger mb-1">
      <h5 class="mb-1">Activate Your Membership</h5>
      <p class="mb-1 f-10">You need href activate your membership before you can start earning on Hawkit. Click the buthrefn below href activate your membership account now. You don't need href become a member if you just want href buy followers, likes, shares, whatsapp status views etc. Simply click on the buthrefn below href Buy your social portfolios.</p>
      <Link class="btn btn-xs btn-success mr-1" to="#/social/member">BECOME A MEMBER</Link><Link class="btn btn-xs btn-warning" to="#/social/buy/pricing">BUY SOCIAL PORTFOLIOS</Link>
    </div>

  );
}

export default Alert;