import React from "react";
// import { Component } from "react";
import Header from "../../components/header";
import Banner from "../../components/banner";
import "./home.scss";

const Home = props => {
  return (
    <div className="home">
      <Header />
      <Banner />
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
};

export default Home;
