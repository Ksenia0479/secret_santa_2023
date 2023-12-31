import "./certificate.css";
import dynamic from "next/dynamic";
import { useState } from "react";

// Dynamically import ReactPlayer using react-player/lazy
const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const Certificate = () => {
  const [videoReady, setVideoReady] = useState(false);
  const handleVideoReady = () => {
    setVideoReady(true);
  };

  return (
    <div className="b_main">
      <div className="box">
        <div className="b1" style={{ width: "100%", height: "auto" }}>
          <img src="/photo_2023-12-31_14-58-05.jpg" style={{ width: "100%" }} />
        </div>
      </div>
      <div className="">
        <div className="b2_b1">
          <img src="/photo_2023-12-31_14-58-06.jpg" />
        </div>
        <div className="b2_b2">
          <img src="/photo_2023-12-31_15-15-05.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
