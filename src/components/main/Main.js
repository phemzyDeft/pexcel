import React from 'react';
import Banner from '../AdvertBanner/Banner';
import Card2 from '../cards/Card2';
// import MarketModal from '../'
// import Dashboard from '../dashboard/Dashboard';
// import LoginDisplay from '../logindisplay/LoginDisplay';

function Main(props) {
  return (
    <div className='col-12 col-md-8 col-lg-6 col-xl-6 px-0 mx-0 mb-5'>
      
      {/* <LoginDisplay /> */}
      <Banner/>
      <Card2 />
      {/* <Dashboard /> */}


{/* <!-- Modal --> */}


{/* <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div> */}
    </div>
  );
}

export default Main;