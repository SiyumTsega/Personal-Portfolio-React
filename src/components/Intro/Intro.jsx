import React, { useContext } from "react";
import "./Intro.css";
import crown from "../../img/crown.png";
import hello from '../../img/hello.png'
import FloatinDiv from "../FloatingDiv/FloatingDiv";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="Intro" id="Intro">
      {/* left name side */}
      <div className="i-left">
        <div className="i-name">
          
          <span style={{ color: darkMode ? "white" : "" }}>Hello</span>
          <span>I am Siyum</span>
          <span>
            A passionate Web Developer with a reliable ground in Js, Python, React, Django, Flask, Bootsrap, SASS, JQuery, Node Js, Next Js, Express Js and other related web development tools
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Talk to me</button>
        </Link>
        {/* social icons */}
        <div className="i-icons">
          <img src={Github} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
      {/* right image side */}
      <div className="i-right">
       <div className="i-logo" style = {{
        color: darkMode ? "white" : ""
       }}>
        <span style={{ color: darkMode ? "white" : "" }}>S</span>
       </div>

        <motion.div
          initial={{ top: "-4%", left: "-46%" }}
          whileInView={{ left: "-14%" }}
          transition={transition}
          className="floating-div"
        >
          <FloatinDiv img={crown} text1="Welcome to" text2="my Portfolio" />
        </motion.div>

        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background:'#C1F5FF',
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        >

        </div>
      </div>
    </div>
  );
};

export default Intro;
