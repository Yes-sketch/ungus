import React from "react";
import aboutImage from "./thefeelingwhen.jpg"

function About() {
  return (
    <div className="about bg-green-500">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7 h-2/3 pb-10">
            <img
              class="img-fluid mb-4 mb-lg-0 rounded"
              src={aboutImage}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-thick">About Setup Gaming</h1>
            <p>
              <br />
              Setup Gaming was founded by the two brothers of Files, Setup and Sill. 
              One day Files was extracted and both brothers wanted to continue Files'
              Legacy by paying a homage to a hobby of his. "Building PC's", Setup Gaming 
              Is the most trusted PC part picker and builder in the whole of Australia and 
              we love to work with people who are also as passionate as you.       
              <br />
              <br/>
              Setup Gaming is a sub brand of the Setup franchise, providing therapy, gaming 
              and the best Among Us funny moments of all time. Whether you need help doing lights
              or need to finish the English essay that you procrastinated for the past 
              4 weeks and did it the night before, Setup franchise is the best company for all types
              of people around the globe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;