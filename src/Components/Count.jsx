import React, { Component } from 'react'
import Counter from './Counter'
import './Count.css'
export default class Count extends Component {
  render() {
    return (
    <div className="numbers container my-5 row m-auto">
      <div className="col-sm-6 col-md-3">
      <Counter number={53} title="NO. OF CITIES"  />
      </div>

      <div className="col-sm-6 col-md-3">
      <Counter number={50} title="NO. OF PRODUCTS" />

      </div>

      <div className="col-sm-6 col-md-3">
      <Counter number={100} title="NO. OF DISTRIBUTORS" />

      </div>

      <div className="col-sm-6 col-md-3">
      <Counter number={100} title="YEARS IN BUSINESS" />

      </div>
      </div>
    )
  }
}
