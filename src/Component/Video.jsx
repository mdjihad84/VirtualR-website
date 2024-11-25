import Video1 from "../Images/video1.mp4";
import Video2 from "../Images/video2.mp4";

const video = () => {
  return (
    <div className="flex justify-center gap-6 my-20">
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-[45%] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        src={Video1}
      ></video>
      <video
        autoPlay
        loop
        muted
        className="rounded-lg w-[45%] border border-orange-700 shadow-sm shadow-orange-400 mx-2 my-4"
        src={Video2}
      ></video>
    </div>
  );
};

export default video;
