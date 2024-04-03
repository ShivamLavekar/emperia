import React from "react";
import "./bottle.css";
import CardData from "./CardData";

import { useState, useEffect } from "react";
export default function Personal() {
  const [Data, setData] = useState(null);

  useEffect(() => {
    fetch("/emperia/user/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data)
        setData(data);
      });
  }, []);
  console.log(Data);
  return (
    <section className="bg-1900">
      <div className="container">
        <div className="row">


          {Data && Data.map((element,_id) => {
            return (
              <div className="col-lg-3">
                <div className="card border-0 bg-1900 product">
                  <img
                    src={element.image}
                    className="card-img-top image-fluid "
                    alt="..."
                  />
                  <span className="text-muted">{element.category}</span>
                  <div className="card-body text-center">
                    <div className="card-text text-start pe-5">
                      <p className="fs-5 text-break">{element.title}</p>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <span className="fa fa-star checked"></span>
                      <p className="text-end">₹{element.price}</p>
                    </div>

                    <button className="btn" key={element.id}>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
