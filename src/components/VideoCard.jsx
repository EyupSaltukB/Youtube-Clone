import millify from 'millify';
import { Link } from 'react-router-dom';


const VideoCard = ({ video }) => {
  return (
    <Link to={`/watch/${video.videoId}`}>
      {/* resim kısmı */}
      <div className="relative">
        <img
          className="rounded-lg w-full"
          src={
            video.thumbnails[1]
              ? video.thumbnails[1].url
              : video.thumbnails[0].url
          }
        />
        <span className="absolute right-2 bottom-2 bg-black p-1 rounded ">
          {video.lengthSeconds}
        </span>
      </div>
      {/* alt detay */}
      <div className="flex gap-4 mt-5">
        <img
          className="rounded-full w-12 h-12"
          src={video.author.avatar[0].url}
        />
        <div>
          <h4 className="font-bold">{video.title}</h4>
          <p>{video.author.title}</p>
          <div className="flex gap-3">
            <p>{millify(video.stats.views)}</p>
            <p>{video.publishedTimeText}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;