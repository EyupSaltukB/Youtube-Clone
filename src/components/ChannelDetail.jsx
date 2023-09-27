import millify from 'millify';
import { AiFillDislike, AiFillLike } from 'react-icons/ai';
import moment from 'moment/moment';
import 'moment/locale/tr';
import StringArea from './StringArea';

const ChannelDetail = ({ detail }) => {
  return (
    <>
      <h1 className="mt-3 text-xl  font-bold p-3">{detail.title}</h1>
      {/* kanal hakkında */}
      <div className="flex justify-between items-center p-3">
        <div className="flex items-center gap-4">
          <img
            className="rounded-full w-12 h-12"
            src={detail.author.avatar[0].url}
          />
          <div>
            <h4 className="font-bold">{detail.author.title}</h4>
            <p>{detail.author.stats.subscribersText}</p>
          </div>

          <button className="bg-white h-9 rounded-full text-black px-3 transition hover:bg-[#bebebe]">
            Abone Ol
          </button>
        </div>
        <div className="flex items-center rounded-full py-1 px-6 text-lg bg-[#4b4a4a] cursor-pointer">
          <div className="flex gap-2 items-center pr-3 border-r-2 border-white">
            <AiFillLike />
            <span>{millify(detail.stats.likes)}</span>
          </div>
          <div className="pl-2">
            <AiFillDislike />
          </div>
        </div>
      </div>

      {/* video hakkında */}
      <div className="bg-[#383838] rounded p-2 mt-2 cursor-pointer hover:bg-[#535353]">
        <div className="flex gap-3 ">
          <p>{millify(detail.stats.views)} Görüntüleme</p>
          <p>{moment(detail.publishedDate).fromNow()}</p>
          <ul className="flex gap-3">
            {detail.superTitle.items
              .slice(0, 3)
              .map((item, index) => (
                <li key={index}>{item}</li>
              ))}
          </ul>
        </div>
        <StringArea text={detail.description} max={200} />
      </div>
    </>
  );
};

export default ChannelDetail;