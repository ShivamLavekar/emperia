import React, { Component } from "react";
import './About.css'
export default class About extends Component {
  render() {
    return (
      <div className="About">
        <div className="container">
          <div className="row lh py-5">
            <div className="col-md-6">


            <img
                src="media/GIF-1.gif"
                alt=""
                className="com2 position-absolute img-fluid"

              />


              <img
                src="media/commercial.jpg"
                className="com1 position-relative img-fluid"

              />






            </div>
            <div className="col-md-6 rh mb-5 m-auto pe-4 ps-4">
              <h4>ABOUT US</h4>
              <p>
                Hygiene Care is a division of Empire Industries Limited, a
                century-old conglomerate with a repertoire of business interests
                and a legacy of trust. Empire Industries is a public limited
                company that is headquartered in Mumbai, India. In addition to
                its diverse portfolio of businesses, Empire Industries Limited
                has established a strong market presence in the manufacturing
                and marketing of machine tools, industrial equipment, glass
                bottles and frozen foods; while also subleasing out business
                centers along with integrated industrial and residential
                townships and introducing the concept of vending in India.
                Grabbit+: Premium Vending Solutions is the pioneer and market
                leader in the vending industry and has evolved to be the most
                preferred vending service provider in India.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
