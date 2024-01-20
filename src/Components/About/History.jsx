import React from "react";
import './History.css'

export default function History() {
  return (
    <div>
      <section className=""style={{backgroundColor:"#effafa"}}>
        <div className="bg-History p-0 m-0 card">
          <img src="media/background.jpg" alt="" className="img-fluid"/>
          <div className="card-img-overlay d-flex justify-content-center align-items-center h-100">
            <h1 className="text-white">History</h1>
          </div>
        </div>
        <div className="container info my-5">
          <p>
            Our journey began a century ago when we started as a textile
            production house in India. Over the years, we have grown into a
            diversified group with a presence in multiple industries and
            sectors. Empire Industries Limited, with its repertoire of
            businesses, has established a strong market presence in the
            manufacture and marketing of machine tools, industrial equipment,
            glass bottles, business centers, integrated industrial and
            residential townships, frozen foods and vending machines.  <br /><br /> Empire
            Industries Limited., through its pioneering efforts, introduced the
            internationally understood concept of vending, in India. Grabbit +
            was launched with the vision to be the most preferred vending
            solution provider by making world-class, quality vending machines
            for corporate offices in India.
          </p>
          <div className="container row">
            <div className="col-lg-6">
              <p>
                During the surge of Covid-19, individuals and communities were
                faced with the most difficult challenges. The economy was
                distraught as the supply of the most basic necessities was
                inaccessible. Grabbit+ saw this as an opportunity to contribute
                to the lives of many. Grabbit+ not only offered vending services
                during this time but also assisted institutions across the
                country in maintaining hygiene and creating a healthier, better
                and safer environment for its employees and visitors by making a
                range of health and hygiene solutions expediently available.
                This marked the beginning of the Health & Hygiene vertical,
                which is known for developing high-quality products and
                providing world-class services to its customers. Grabbit+
                started contributing to the nation’s hygiene and was committed
                to serving with the same dedication and excellence that have
                been our hallmark for a hundred years.
              </p>
            </div>
            <div className="col-lg-6">
              <img src="media/empire.jpg" alt="" className="img-fluid w-100"/>
            </div>
            <p>
              We have leveraged our decades of experience in research and
              development to create products that are safe, effective, and easy
              to use. As a company with a century-long legacy, we understand the
              importance of responsibility towards society. That is why all our
              products are carefully formulated to meet the highest standards of
              quality and safety.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
