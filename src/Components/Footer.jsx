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
                <li>
                  <Link to="">Company History</Link>
                </li>
                <li>
                  <Link to="">Leadership</Link>
                </li>
                <li>
                  <Link to=""> Core values</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h4 className="my-5">Quick Links</h4>
              <ul className='list-unstyled' style={{textDecoration:"none"}}>
                                <li><Link to="">Manufacturing and Distribution</Link></li>
                                <li><Link to="">Terms & Conditions</Link></li>
                                <li><Link to=""> Privacy policy</Link></li>
                                <li><Link to=""> Contact Uss</Link></li>
                                <li><Link to="">Careers</Link></li>
                            </ul> 
            </div>
            <div className="col-md-3">
              <h4 className="my-5">Our Products</h4>
              <ul className='list-unstyled '>
                                <li><Link to="">Personal Care</Link></li>
                                <li><Link to="">Bathroom Care</Link></li>
                                <li><Link to="">Floor & Surface Care</Link></li>
                                <li><Link to="">General Care</Link></li>
                                <li><Link to="">Kitchen Care</Link></li>
                            </ul>
            </div>
            <div className="col-md-3 justify-content">
              <h4 className="my-5">Contact Info</h4>
              <p className="lh-lg">
                Empire Industries Limited – Hygiene Care, Empire Complex, 414,
                Senapati Bapat Marg, Lower Parel (W), Mumbai – 400013 <br />Call: 1800-2092-526
                <br />
                care@grabbitempire.com
              </p>
            </div>
          </div>

        
        </footer>
      <hr />
      <div className=" container row m-auto w-100">
            <div className="col-sm-6">
              <p>
                Copyright © 2023 Emperia 1900 <br /> Powered by Tushar
                Chawatekar
              </p>
            </div>

            <div className="col-sm-6 justify-content-center">
            <div className="float-end">
              <i className="fa-brands fa-facebook pe-3"></i>
              <i className="fa-brands fa-instagram pe-3"></i>
              <i className="fa-brands fa-linkedin pe-3"></i>
              <i className="fa-brands fa-twitter pe-3"></i>
              <i className="fa-brands fa-youtube"></i>
            </div>
            </div>
          
          </div>
      </div>
    );
  }
}

export default Footer;
