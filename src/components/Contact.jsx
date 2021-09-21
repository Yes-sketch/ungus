import React from "react";
import contactImage from "./about.jpg"
import "./Contact.css"

function Contact() {
  return (
    <div>
    <div className="contact">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="img-fluid rounded mb-4 mb-lg-0"
              src={contactImage}
              alt=""
            />
          </div>
          <div class="col-lg-4">
            <h1 class="font-weight-thick">Contact Us</h1>
            <p>
              If you have any inquiries about what kind of PC you need, feel free to ask
              by calling +61 133 769 420 or emailing setup.gaming@gmail.com. Or you can simply
              fill the sign up form below to send over some information for us.
              Remember that any questions are answered and that our staff is very friendly.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="container2">
    <form action="action_page.php">
  
      <label for="fname">First Name</label>
      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
  
      <label for="lname">Last Name</label>
      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
  
      <label for="country">State</label>
      <select id="country" name="country">
        <option value="wa">Western Australia</option>
        <option value="sa">South Australia</option>
        <option value="nsw">New South Wales</option>
        <option value="nt">Northern Territory</option>
        <option value="qld">Queensland</option>
        <option value="vic">Victoria</option>
        <option value="tas">Tasmania</option>
      </select>
  
      <label for="subject">What kind of PC?</label>
      <textarea id="subject" name="subject" placeholder="Write something..." style={{height:"100px"}}></textarea>
  
      <input type="submit" value="Submit"/>
  
    </form>
  </div>
  </div>
  );
}


export default Contact;