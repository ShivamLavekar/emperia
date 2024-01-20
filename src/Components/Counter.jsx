import React from "react"
import CountUp from "react-countup"
export default function Counter({ number, title }) {
  return <div className="number">
    <span>{title}</span>
  <CountUp duration={2} className="counter" end={number} suffix="+"/>
</div>;
}
