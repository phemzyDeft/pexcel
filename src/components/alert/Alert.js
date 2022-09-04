import React from 'react';

const Alert = (props) => {
  return (
    <div class="alert alert-danger mb-1">
      <h5 class="mb-1">Activate Your Membership</h5>
      <p class="mb-1 f-10">You need to activate your membership before you can start earning on Hawkit. Click the button below to activate your membership account now. You don't need to become a member if you just want to buy followers, likes, shares, whatsapp status views etc. Simply click on the button below to Buy your social portfolios.</p>
      <a class="btn btn-xs btn-success mr-1" href="#/social/member">BECOME A MEMBER</a><a class="btn btn-xs btn-warning" href="#/social/buy/pricing">BUY SOCIAL PORTFOLIOS</a>
    </div>

  );
}

export default Alert;