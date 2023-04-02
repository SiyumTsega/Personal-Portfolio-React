import React, { useContext } from "react";
import { themeContext } from "../../Context";
import "./Experience.css";
const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='experience'>
      <div className="achievement">
        {/* darkMode */}
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><div className='exp-years'>8+</div></div>
        <span  style={{color: darkMode?'white':''}}> Years of University</span>
        <span>teaching experience</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><div className='exp-years'>10+</div></div>
        <span  style={{color: darkMode?'white':''}}>Delivered </span>
        <span>Projects</span>
      </div>
      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--orange)':''}}><div className='exp-years'>2</div></div>
        <span  style={{color: darkMode?'white':''}}>Companies </span>
        <span>Served</span>
      </div>
    </div>
  );
};

export default Experience;
