import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonial.css";

export default class Responsive extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    return (
      <section className="Testimonial pb-5">
        <div className="container text-center">
          <h2 className="text-center py-5 text-white"> OUR CLIENTS</h2>
          <Slider {...settings}>
            <div className="m-auto justify-content-center">
              <img src="media/L__T.png" alt="" className="img-fluid px-3"/>
            </div>
            <div div className="m-auto justify-content-center">
              <img
                src="media/lg_kalptaru.jpg"
                alt=""
                className="img-fluid m-auto px-3"
              />
            </div>
            <div>
              <img
                src="media/lg_nulife_hospital.jpg"
                alt=""
                className="img-fluid px-3"
              />
            </div>
            <div>
              <img src="media/lg_pnb.jpg" alt="" className="img-fluid px-3" />
            </div>
            <div>
              <img
                src="media/monarch.png"
                alt=""
                className="img-fluid px-3 "
              />
            </div>
            <div>
              <img
                src="media/smaaash.png"
                alt=""
                className="img-fluid px-3"
              />
            </div>
            <div>
              <img
                src="media/vijay_sales.png"
                alt=""
                className="img-fluid px-3"
              />
            </div>
            <div>
              <img
                src="media/cushman__wakefield.png"
                alt=""
                className="img-fluid px-3"
              />
            </div>
            <div>
              <img
                src="media/burckhardt_compression.png"
                alt=""
                className="img-fluid px-3"
              />
            </div>
          </Slider>
        </div>
      </section>
    );
  }
}
