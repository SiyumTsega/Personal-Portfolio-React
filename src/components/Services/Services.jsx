import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;



  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>Here are my</span>
        <span>services</span>
        <spane>
          I will deliver a well designed and efficiently coded
          <br />
         website and web app within a reasonable time bound.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Get Resume</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <div
          style={{ left: "25rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
          />
        </div>
        {/* second card */}
        <div
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Programming"}
            detail={"Html, Css, JavaScript, React, Nodejs, Express"}
          />
        </div>
        {/* 3rd */}
        <div
          style={{ top: "19rem", left: "11.5rem" }}
        >
          <Card
            emoji={Humble}
            heading={"UI/UX"}
            detail={
              'I will deliver an eye-catching and elegant front-end view by following best practices'
            }
            color="rgba(252, 166, 31, 0.45)"
          />
        </div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
