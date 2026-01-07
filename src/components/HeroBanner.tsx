import type { MouseEventHandler } from "react";
import type { VideoCategory } from "../types/videoSeries";

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
        {currentVideo && (
          <div className="modal-player" onClick={handleCloseVideo}>
            <iframe
              src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroBanner;
