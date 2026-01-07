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

  // Handle debug URL search param
  const qs = window.location.search;
  if (qs) {
    const params = new URLSearchParams(qs);
    console.log(params.has("debug"));
  }

  return (
    <main>
      <HeroBanner
        videoCategory={videoSeries?.videoCategory}
        currentVideo={currentVideo}
        handleCloseVideo={handleCloseVideo}
      />
      <VideoGrid
        videos={videoSeries?.videoCategory.videos}
        handleClickVideo={setCurrentVideo}
      />
    </main>
  );
};
