import { VideoItem } from "../types/videoSeries";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: VideoItem[] | undefined;
  handleClickVideo: Function;
}

const VideoGrid = ({ videos, handleClickVideo }: VideoGridProps) => {
  return (
    <div className="video-list repsonsive-grid">
      {videos?.map((v: VideoItem) => (
        <VideoCard key={v.id} video={v} handleClickVideo={handleClickVideo} />
      ))}
    </div>
  );
};

export default VideoGrid;
