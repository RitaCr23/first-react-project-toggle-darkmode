import image from "../images/retsuko.jpg";
import React from "react";

export default function Info() {
  return (
    <div className="Info">
      <img src={image} />
      <h2>Retsuko</h2>
      <h3>Frontend Developer</h3>
      <h4>www.randomwebsite.com</h4>
      <button className="email-btn">Email</button>
      <button className="linkedin-btn">LinkedIn</button>
    </div>
  );
}
