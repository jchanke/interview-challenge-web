import type { MouseEventHandler } from "react";
import type { VideoCategory } from "../types/videoSeries";
import VideoPlayer from "./VideoPlayer";

interface HeroBannerPropType {
  videoCategory: VideoCategory | undefined;
  currentVideo: string | null;
  handleCloseVideo: MouseEventHandler;
}

const HeroBanner = ({
  videoCategory,
  currentVideo,
  handleCloseVideo,
}: HeroBannerPropType) => {
  return (
    <div className="hero-banner" id={videoCategory?.id}>
      <header className="header">
        <h1>BibleProject</h1>
      </header>
      <div className="container">
        <div className="video-category-info">
          <h2 className="video-category-title">{videoCategory?.title}</h2>
          <div className="video-category-divider">
            <hr />
          </div>
          <div className="video-category-desc">
            {videoCategory?.description}
          </div>
        </div>
        {/**
         * The modal player below is:
         *  - a fixed element that fills the screen, when screen is small,
         *  - a static element and hence a flex-item, when screen is big.
         *
         * It only displays when there's a video selected.
         */}
        {currentVideo && (
          <VideoPlayer
            currentVideo={currentVideo}
            handleCloseVideo={handleCloseVideo}
          />
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
