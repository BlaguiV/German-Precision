import "./Background.css";
import video1 from "../../assets/video1.mp4";
import audiOne from "../../assets/audiOne.jpg";
import audiTwo from "../../assets/audiTwo.jpg";
import audi from "../../assets/audi.jpg";

function Background({ playStatus, heroCount }) {
  if (playStatus) {
    return (
      <video className="background" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={audiOne} className="background" alt="" />;
  } else if (heroCount === 1) {
    return <img src={audiTwo} className="background" alt="" />;
  } else if (heroCount === 2) {
    return <img src={audi} className="background" alt="" />;
  }
}

export default Background;
