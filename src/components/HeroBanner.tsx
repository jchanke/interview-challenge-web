import type { VideoCategory } from "../types/videoSeries";

interface HeroBannerPropType {
  videoCategory: VideoCategory | undefined;
}

const HeroBanner = ({ videoCategory }: HeroBannerPropType) => {
  return (
    <div className="hero-banner" id={videoCategory?.id}>
      <header className="header">
        <h1>BibleProject</h1>
      </header>
      <div className="video-category-info">
        <h2 className="video-category-title">{videoCategory?.title}</h2>
        <div className="video-category-divider">
          <hr />
        </div>
        <div className="video-category-desc">{videoCategory?.description}</div>
      </div>
    </div>
  );
};

export default HeroBanner;
