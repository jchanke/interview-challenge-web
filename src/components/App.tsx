import { useEffect, useState } from "react";
import type { VideoSeries } from "../types/videoSeries";

import HeroBanner from "./HeroBanner";
import VideoGrid from "./VideoGrid";

export const App = () => {
  const [videoSeries, setVideoSeries] = useState<VideoSeries | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);

  // On page load, load video data from API
  const getVideoSeriesData = async () => {
    try {
      const response = await fetch("/api/data.json");
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      const videoSeriesData = await response.json();
      setVideoSeries(videoSeriesData.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVideoSeriesData();
  }, []);

  // When user selects region outside video, close modal
  const handleCloseVideo = () => setCurrentVideo(null);

  return (
    <main className="container">
      <HeroBanner videoCategory={videoSeries?.videoCategory} />
      <VideoGrid
        videos={videoSeries?.videoCategory.videos}
        handleClickVideo={setCurrentVideo}
      />
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
    </main>
  );
};
