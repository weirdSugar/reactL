import React from "react";
import { Component } from "react";
import Header from "../../components/header";
import "./home.scss";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header />
        {Array(120)
          .fill(null)
          .map((itm, idx) => (
            <div
              onClick={function() {
                alert("qweqwr");
              }}
              className="zzz"
              key={idx}
            >
              {idx}
            </div>
          ))}
      </div>
    );
  }
}
export default Home;
