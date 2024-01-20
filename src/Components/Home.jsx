import React from "react";
import { Link } from "react-router-dom";
import Count from "./Count";
import About from "./About"
import Slick from "./Slick";
import Testimonial from "./Testimonial"
import Client from "./Client"
export default function Home() {
  return (
    <div>
      <section className="container-fluid">
        <div className="row">
          
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            
            <div className="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="media/Homebg1.jpg"
                  className="d-block w-100 img-fluid"
                  alt="..."
                  height={600}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="media/Homebg2.jpg"
                  className="d-block w-100 img-fluid"
                  alt="..."
                  height={600}
                />
              </div>

              <div className="carousel-item">
                <img
                  src="media/Homebg3.jpg"
                  className="d-block w-100 img-fluid"
                  alt="..."
                  height={600}
                />
              </div>

              {/* <div className="card-img-overlay slide-info col-md-6">
                <h1>Our Vision</h1>
                <p className="Ourvision">
                  To promote public health and hygiene by providing leading
                  hygiene care solutions that enable individuals and communities
                  to maintain a healthy and safe environment.
                </p>
                <button className="btn rounded-pill read">Read more </button>
              </div> */}
            </div>
          </div>
        </div>

      </section>

      <Count/>
      <About/>
      <Slick/>
      <Testimonial/>
      <Client/>
    </div>
  );
}
