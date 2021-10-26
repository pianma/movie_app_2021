import React from "react";
import './About.css';

function About(props) {
    console.log(props);
    return (
   
        <div className="about__container">
            <span>
                "Liberty without learning is always in peril
                learning without liberty is always in vain. "
            </span>
            <span>-John F. Kennedy</span>
        </div>
    )
}



export default About;