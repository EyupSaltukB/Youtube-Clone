import { useContext } from 'react';
import { YoutubeContext } from '../context/youtubeContext';
import SideNav from './../components/SideNav';
import Loading from '../components/Loading';
import VideoCard from './../components/VideoCard';

const Feed = () => {
  const { videos } = useContext(YoutubeContext);

  return (
    <div className="flex min-h-[100vh] bg-[#0F0F0F] text-white">
      <SideNav />
      <div className="videos w-full">
        {!videos ? (
          <Loading />
        ) : (
          videos.map((item) => {
            // eğer elemanın tipi video değilse hiç bir şey yapma
            if (item.type !== 'video') return;
            // video ise o zaman kart bileşenin bas
            return (
              <VideoCard
                key={item.video.videoId}
                video={item.video}
              />
            );
          })
        )}
      </div>
    </div>
  );
};

export default Feed;