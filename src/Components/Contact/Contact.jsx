import React from "react";

export default function Contact() {
  return (
    <>
      <section className="bg-1900">
        <div className="container">
          <div className="row py-5">
            <div className="col-md-6 px-5">
              <h1 className="py-4">Get In Touch</h1>
              <h6 className="ps-5">CORPORATE OFFICE</h6>
              <h4 className="ps-5">
                Empire Industries Limited – Hygiene Care, Empire Complex, 414,
                Senapati Bapat Marg, Lower Parel (W), Mumbai – 400013
              </h4>
              <h5 className="fw-bold text-center  ">Regional Offices</h5>
              <p className="fs-4 text-center">
                Mumbai | Delhi | Kolkata | Bengaluru{" "}
              </p>

              <br />
              <hr />
              <br />
              <h6 className="ps-5">CALL US</h6>
              <h4 className="ps-5">1800 209 2526</h4>
              <br />
              <hr />
              <br />
              <h6>EMAIL US</h6>
              <h4 className="ps-5">care@grabbitempire.com</h4>
            </div>

            <div className="col-md-6">
              <div className="bg-white p-5">
                <form action="" className="ContactForm">
                  <label htmlFor="" className="fw-bold fs-5">Name*</label>
                  <div className="row">
                    <div className="col-md-6">
                      <input type="text" className="p-2 w-100" />
                      <h6>First</h6>
                    </div>
                    <div className="col-md-6">
                      <input type="text" className="p-2 w-100"/>
                      <h6>Last</h6>
                    </div>
                  </div>
                  <br />
                  <div className="">
                    <label htmlFor="" className="fw-bold fs-5">Contact Number</label>
                    <br />
                    <input type="text" className="p-2 w-100"/>
                    <br />
                    <br />
                    <label htmlFor="" className="fw-bold fs-5">Email</label>
                    <br />
                    <input type="text" className="p-2 w-100" />
                    <br />
                    <br />
                    <label htmlFor="" className="fw-bold fs-5">Subject</label>
                    <br />
                    <input type="text" className="p-2 w-100" />
                    <br />
                    <br />
                    <label htmlFor="" className="fw-bold fs-5">Comment or Message</label> <br />
                    <textarea
                      name="textarea"
                      id=""
                      cols="30"
                      rows="10"
                      className="p-2 w-100"
                    ></textarea>
                    <br />
                    <input type="checkbox" name="" id="" />
                    <label className="fw-bold fs-5 ps-2">
                      I Consent to recieve communication from EMPERIA 1900*
                    </label> <br /><br />
                    <button className="btn rounded-pill me-3 fs-5" to="Contact">
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
