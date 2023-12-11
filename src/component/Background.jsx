import React from "react";
import SkyVideo from "../assets/skyVideo.mp4"
import "../index.css";

const Background = () => {
    return ( 
        <div className="background">
            <div className="overlay"></div>
            <video src={SkyVideo} autoPlay loop muted></video>
        </div>
     );
}
 
export default Background
