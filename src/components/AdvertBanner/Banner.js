import React from 'react';
import { banner1, banner2, banner3, banner4 } from '../../assets';


const Banner = (props) => {
  return (

  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active ">
      <div className="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner1} alt='banner1'/></div>
    </div>
    <div className="carousel-item ">
    <div className="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner2} alt='banner2'/></div>
    </div>
    <div className="carousel-item ">
    <div className="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner3} alt='banner3'/></div>
    </div>    
    <div className="carousel-item ">
    <div className="_1wbTpsTsPs _2OOFlEI1jS"><img src={banner4} alt='banner4'/></div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="fas fa-chevron-left _2s1ZvBDYOd" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="fas fa-chevron-right _2s1ZvBDYOd" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  );
}

// style={{height: "calc(100vh - 10px)", top: "calc(10px)"}}

export default Banner;
