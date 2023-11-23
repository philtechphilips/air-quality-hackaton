import Globe from "../../assets/material-symbols_globe.png";
import userGroup from "../../assets/icon _user group_.png";
import Clock from "../../assets/clock-02.png"

const Body = () => {
  return (
    <div className="main-body">
      <div className="main-body-content">
        <h1>Breathe Easy with <span>EcoAirWatch</span></h1>
        <p className="body-text">Your passport to real-time air quality insights worldwide. Our platform delivers up-to-the-minute data, empowering you to make informed decisions about the air you breathe. From bustling metropolises to serene landscapes, gain a global perspective on air quality, ensuring your well-being wherever you go</p>
      </div>

      <div className="main-body-info">
        <div className="main-body-info-flex">
            <div className="body-icons">
            <img src={Globe}></img>
            </div>
            <h3>Worldwide Coverage</h3>
        </div>

        <div className="main-body-info-flex body-info-left">
            <div className="body-icons">
            <img src={Clock}></img>
            </div>
            <h3>Real-Time Updates</h3>
        </div>

        <div className="main-body-info-flex">
            <div className="body-icons">
            <img src={userGroup}></img>
            </div>
            <h3>User-Friendly Interface</h3>
        </div>
      </div>
    </div>
  )
}

export default Body
