import React from "react";
import './bottle.css'
export default function Personal() {
  return (
    <>
      <section className="container">
        <div className="row">
        <div class="card sqr col-md-4">
          <img src="bt3.jpeg" class="card-img-top image-fluid bottle" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card sqr col-md-4">
          <img src="bt3.jpeg" class="card-img-top image-fluid bottle" alt="..." />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
