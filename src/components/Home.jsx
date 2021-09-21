import React from "react";
import homeImage from './homeimage.jpeg'

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={homeImage}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-Thick">We have built hundreds of PC's</h1>
            <p>
            We’re so proud to be WA's premier PC builder, becoming the state’s largest exporter of custom gaming PC‘s across the whole of Australia. 
            Each PC is built by professionally trained PC builders and as a customer, you are never left guessing thanks to our unique build tracker board that everyone loves.
            You can see the updates in real time. When we fit the motherboard, when we installed the graphics card, when we tested the performance and when we package it up, ready to go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;