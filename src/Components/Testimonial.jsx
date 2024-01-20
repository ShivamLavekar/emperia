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
      slidesToShow: 2,
      slidesToScroll: 1,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
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
      <>
        <section className="Testimonial my-4">
          <div className="container text-center">
            <h2 className="text-center py-5 text-white"> TESTIMONIAL</h2>
            <Slider {...settings}>
              <div>
                <img
                  src="media/Pushpa.jpg"
                  alt=""
                  className="img-fluid align-item-center d-block m-auto rounded-circle"
                />
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <h3>Pushpa joshi</h3>
                <p>Admin Executive, Rockwell Automation India Private Ltd</p>
              </div>
              <div>
                <img
                  src="media/HITESH.jpg"
                  alt=""
                  className="img-fluid client d-block m-auto rounded-circle"
                />
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <h3>Hitesh Makwana</h3>
                <p>Senior Administrator, Cimpress India Private Ltd.</p>
              </div>
              <div>
                <img
                  src="media/Neeru.jpg"
                  alt=""
                  className="img-fluid client d-block m-auto rounded-circle"
                />
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <h3>Neeru Mittal</h3>
                <p>Senior Administrator, Cimpress India Private Ltd.</p>
              </div>
            </Slider>
          </div>
        </section>
        <section className="container">
          <div className="row my-5">
            <div className="col-md-3 text-center">
              <h3 className="" style={{color: "#1dbfc1"}}>
                BRAND VALUE
              </h3>
            </div>
            <div className="col-md-9">
              <p className="justify-content">
                We believe in providing effective and innovative hygiene care
                solutions that enable individuals and communities to maintain a
                clean and healthy environment; therefore, we have set standards
                for excellence. We are guided by our principles; a
                customer-centric approach, passion and integrity, continuous
                improvement & innovation and people-oriented culture.
              </p>
            </div>
          </div>
        </section>
      </>
    );
  }
}
