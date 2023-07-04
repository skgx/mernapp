import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Carousal from "../components/Carousal";

export default function home() {
  return (
    <div>
      <Navbar />
      <div>
        <Carousal />
      </div>

      <div className="m-3">
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      </div>
      <div className="m-5">

      <Footer/>
      </div>
     
    </div>
  );
}
