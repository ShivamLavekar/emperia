import React from "react";
import "./History.css"
export default function CoreValues() {
  return (
    <div>
      <section className=""style={{backgroundColor:"#effafa"}}>
        <div className="card bg-primary" style={{ height: "400px" }}>
          <img src="" alt="" />
          <div className="card-img-overlay align-items-center justify-content-center d-flex">
            <h1>Core Values</h1>
          </div>
        </div>

        <div className="container py-1">
          <div className="row pt-5">
            <div className="col-md-6">
              <img
                src="media/our-vision.jpg"
                alt=""
                className="img-fluid rounded-5 mx-auto d-block"style={{width:"450px"}}
              />
            </div>
            <div className="col-md-6 info">
              <h1 style={{color:"#1dbfc1"}}>Vision</h1>
              <p>
                Our vision is to promote public health and hygiene by providing
                leading hygiene care solutions that enable individuals and
                communities to maintain a healthy and safe environment.
              </p>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-6 info">
              <h1 style={{color:"#1dbfc1"}}>Mission</h1>
              <p>Our Mission is to promote healthy living by;</p>
              <ul>
                <li>provide innovative and effective hygiene care solution,</li>
                <li>having a customer-centric approach</li>
                <li>
                  being people-oriented and serving as a responsible & socially
                  conscious company that makes a positive impact on the nation.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img src="media/Mission.png" alt="" className="img-fluid rounded-5 mx-auto d-block" style={{width:"450px"}}/>
            </div>
          </div>

          <div className="row pb-5">
            <div className="col-md-6">
              <img src="media/Values.png" alt="" className="img-fluid rounded-5 mx-auto d-block" style={{width:"450px"}} />
            </div>
            <div className="col-md-6 info">
              <h1 style={{color:"#1dbfc1"}}>Brand Values</h1>
              <p>
                We believe in providing effective and innovative hygiene care
                solutions that enable individuals and communities to maintain a
                clean and healthy environment; therefore, we have set standards
                for excellence. We are guided by our principles; a
                customer-centric approach, passion and integrity, continuous
                improvement & innovation and people-oriented culture.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
