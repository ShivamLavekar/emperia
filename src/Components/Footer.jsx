import React, { Component } from "react";
import { Link } from "react-router-dom";
export class Footer extends Component {
  render() {
    return (
      <div className="container-fluid">
        <footer className="container">
          <div className="row  justify-content-center">
            <div className="col-md-3">
              <h4 className="my-5">About Company</h4>
              <ul className="list-unstyled  ">
                <li className=" ">
                  <a href="">Company History</a>
                </li>
                <li>
                  <a href="">Leadership</a>
                </li>
                <li>
                  <a href=""> Core values</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="my-5">Quick Links</h4>
              <ul className='list-unstyled' style={{textDecoration:"none"}}>
                                <li><Link href="">Manufacturing and Distribution</Link></li>
                                <li><a href="">Terms & Conditions</a></li>
                                <li><a href=""> Privacy policy</a></li>
                                <li><a href=""> Contact Uss</a></li>
                                <li><a href="">Careers</a></li>
                            </ul> 
            </div>
            <div className="col-md-3">
              <h4 className="my-5">Our Products</h4>
              <ul className='list-unstyled '>
                                <li><a href="">Personal Care</a></li>
                                <li><a href="">Bathroom Care</a></li>
                                <li><a href=""> Floor & Surface Care</a></li>
                                <li><a href="">General Care</a></li>
                                <li><a href="">Kitchen Care</a></li>
                            </ul>
            </div>
            <div className="col-md-3 justify-content">
              <h4 className="my-5">Contact Info</h4>
              <p className="lh-lg">
                Empire Industries Limited – Hygiene Care, Empire Complex, 414,
                Senapati Bapat Marg, Lower Parel (W), Mumbai – 400013 1800 209
                2526
                <br />
                care@grabbitempire.com
              </p>
            </div>
          </div>

        
        </footer>
      <hr />
      <div className=" container row m-auto w-100">
            <div className="col-sm-6">
              <p className="">
                Copyright © 2023 Emperia 1900 <br /> Powered by Tushar
                Chawatekar
              </p>
            </div>

            <div className="col-sm-6 justify-content-center">
            <div className="float-end">
              <i class="fa-brands fa-facebook pe-3"></i>
              <i class="fa-brands fa-instagram pe-3"></i>
              <i class="fa-brands fa-linkedin pe-3"></i>
              <i class="fa-brands fa-twitter pe-3"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
            </div>
          
          </div>
      </div>
    );
  }
}

export default Footer;
