import { MouseEventHandler } from "react";

interface VideoPlayerProps {
  currentVideo: string; // YouTube id of selected video
  handleCloseVideo: MouseEventHandler;
}
const VideoPlayer = ({ currentVideo, handleCloseVideo }: VideoPlayerProps) => (
  <div className="modal-player" onClick={handleCloseVideo}>
    <iframe
      src={`https://www.youtube.com/embed/${currentVideo}?autoplay=1`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  </div>
);

export default VideoPlayer;
