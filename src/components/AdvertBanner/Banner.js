import React from 'react';
const Banner = (props) => {
  return (

  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src="https://staticcdn.blivar.com/images/slider-1.jpg" alt=''/></div>
    </div>
    <div class="carousel-item ">
    <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src="https://staticcdn.blivar.com/images/slider-2.jpg" alt=''/></div>
    </div>
    <div class="carousel-item ">
    <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src="https://staticcdn.blivar.com/images/banner3.jpg" alt=''/></div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="fas fa-chevron-left _2s1ZvBDYOd" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="fas fa-chevron-right _2s1ZvBDYOd" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

// style={{height: "calc(100vh - 10px)", top: "calc(10px)"}}

export default Banner;