import { VideoItem } from "../types/videoSeries";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: VideoItem[] | undefined;
  handleClickVideo: Function;
}

const VideoGrid = ({ videos, handleClickVideo }: VideoGridProps) => {
  // Sort VideoItems by published date
  const compareOnPublishDate = (a: VideoItem, b: VideoItem) => {
    const msDateA = new Date(a.publishDate).valueOf();
    const msDateB = new Date(b.publishDate).valueOf();
    return msDateA - msDateB;
  };
  return (
    <div className="video-list repsonsive-grid">
      {videos?.sort(compareOnPublishDate).map((v: VideoItem) => (
        <VideoCard key={v.id} video={v} handleClickVideo={handleClickVideo} />
      ))}
    </div>
  );
};

export default VideoGrid;
