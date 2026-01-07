import { VideoItem } from "../types/videoSeries";

interface VideoCardProps {
  video: VideoItem;
  handleClickVideo: Function;
}

const VideoCard = ({ video, handleClickVideo }: VideoCardProps) => {
  // Shorten video description — split, and get back first punctuation
  const punctuation = RegExp("[.!?]");
  const videoDescriptionSentences = video.description.split(punctuation);
  const firstSentence = videoDescriptionSentences[0];
  const shortDescription = firstSentence
    ? firstSentence + video.description[firstSentence.length]
    : video.description;

  // Compute duration in mins (round up)
  const durationMins = Math.ceil(video.durationSeconds / 60);

  return (
    <div className="video" id={video.id}>
      <div
        className="video-thumbnail"
        onClick={() => handleClickVideo(video.youtubeId)}
      >
        <img
          alt={`Video thumbnail for ${video.title}`}
          src={video.images.small}
        />
      </div>
      <div className="video-title">{video.title}</div>
      <div className="video-desc">{shortDescription}</div>
      <div className="card-footer">
        <div className="video-duration">{durationMins} minutes</div>
        <i className="fa-solid fa-circle-chevron-right"></i>
      </div>
    </div>
  );
};

export default VideoCard;
