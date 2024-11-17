import Video1 from '../../Images/video1.mp4';
import Video2 from '../../Images/video2.mp4';

const componentName = () => {
    return (
        <div className="flex">
            <video src={Video1}></video>
            <video src={Video2}></video>
        </div>
    );
};

export default componentName;