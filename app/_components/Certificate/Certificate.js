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

  const isReactPlayerLoaded = typeof ReactPlayer !== "undefined";

  return (
    <div className="b_main">
      <div className="box">
        <ReactPlayer
          url="/IMG_0876.MP4" // replace with your video URL
          playing
          loop
          // muted
          width="auto"
          height="105%"
          className="b1"
          onReady={handleVideoReady}
        />
      </div>
      {videoReady && (
        <div className="box">
          <div className="b2_b1">
            <img src="/IMG_0883.png" />
          </div>
          <div className="b2_b2">
            <img src="/IMG_0884.PNG" />
          </div>
        </div>
      )}
      {videoReady && (
        <div className="box">
          <div className="b3_b1">
            <div className="b3_b1_b1">
              <ReactPlayer
                url="/IMG_0877.MP4" // replace with your video URL
                playing
                loop
                muted
                width="auto"
                height="105%"
                onReady={handleVideoReady}
              />
            </div>
            <div className="b3_b1_b2">
              <div className="b3_b1_b2_b1">
                <img src="/IMG_0890.jpg" />
              </div>
              <div className="b3_b1_b2_b2">
                <div
                  data-v-38debca7=""
                  data-v-6ad566dd=""
                  className="gift-card"
                  data-v-22b101ee=""
                >
                  <img
                    data-v-38debca7=""
                    src="/gift-card.png"
                    className="gift-card__image"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="b3_b2">
            <div className="b3_b2_b1">
              <img src="/IMG_0880.PNG" />
            </div>
            <div className="b3_b2_b2">
              <ReactPlayer
                url="/IMG_0886.MP4" // replace with your video URL
                playing
                loop
                muted
                width="auto"
                height="105%"
                onReady={handleVideoReady}
              />
            </div>
          </div>
        </div>
      )}
      <div className="cover"></div>
      <div className="overlay"></div>
    </div>
  );
};

export default Certificate;
