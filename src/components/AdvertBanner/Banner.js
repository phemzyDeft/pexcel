import React from 'react';
import { banner1, banner2, banner3, banner4 } from '../../assets';


const Banner = (props) => {
  return (

  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active ">
      <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner1} alt='banner1'/></div>
    </div>
    <div class="carousel-item ">
    <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner2} alt='banner2'/></div>
    </div>
    <div class="carousel-item ">
    <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner3} alt='banner3'/></div>
    </div>    
    <div class="carousel-item ">
    <div class="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner4} alt='banner4'/></div>
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