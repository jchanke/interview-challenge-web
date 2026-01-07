export interface ImageSet {
  large: string;
  medium: string;
  mini: string;
  small: string;
}

export interface VideoItem {
  color: string;
  description: string;
  id: string;
  durationSeconds: number;
  images: ImageSet;
  shareUrl: string;
  subtitle: string;
  title: string;
  publishDate: string;
  youtubeId: string;
}

export interface VideoCategory {
  title: string;
  color: string;
  description: string;
  id: string;
  images: ImageSet;
  numVideos: number;
  videos: VideoItem[];
}

export interface VideoSeries {
  videoCategory: VideoCategory;
}

export interface VideoSeriesResponse {
  data: VideoSeries;
}
