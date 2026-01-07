import { useEffect, useState } from "react";
import useError from "../hooks/useError";

import type { VideoSeries } from "../types/videoSeries";

import HeroBanner from "./HeroBanner";
import Toast from "./Toast";
import VideoGrid from "./VideoGrid";

const DEBUG_THRESHOLD = 0.3; // error probability with ?debug URL query param
const TOAST_DURATION_MS = 3000; // duration (ms) that toast is displayed

export const App = () => {
  const [videoSeries, setVideoSeries] = useState<VideoSeries | null>(null);
  const [currentVideo, setCurrentVideo] = useState<string | null>(null);
  const { error, setError } = useError(null, TOAST_DURATION_MS);

  // On page load, load video data from API
  const getVideoSeriesData = async () => {
    try {
      const response = await fetch(`${import.meta.env.BASE_URL}api/data.json`);
      if (!response.ok) {
        throw new Error(
          `HTTP ${response.status}: failed to load data, please try again`
        );
      }
      const videoSeriesData = await response.json();
      setVideoSeries(videoSeriesData.data);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        console.error(err);
      }
    }
  };

  useEffect(() => {
    getVideoSeriesData();
  }, []);

  // When user selects video, open modal (handle errors gracefully)
  const setVideoWithError = (videoYouTubeId: string) => {
    try {
      // If 'debug' is in URL search params: fail with some probability
      const qs = window.location.search;
      if (qs) {
        const params = new URLSearchParams(qs);
        if (params.has("debug") && Math.random() < DEBUG_THRESHOLD) {
          throw new Error("Simulated video opening failure");
        }
      }
      // Set the video to the new YouTube id + remove any error messages
      setCurrentVideo(videoYouTubeId);
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError("Something went wrong opening that video. Please try again.");
      } else {
        console.error(err);
      }
    }
  };

  // When user selects region outside video, close modal
  const handleCloseVideo = () => setCurrentVideo(null);

  return (
    <main>
      <HeroBanner
        videoCategory={videoSeries?.videoCategory}
        currentVideo={currentVideo}
        handleCloseVideo={handleCloseVideo}
      />
      <VideoGrid
        videos={videoSeries?.videoCategory.videos}
        handleClickVideo={setVideoWithError}
      />
      <Toast errorMessage={error} setError={setError} />
    </main>
  );
};
