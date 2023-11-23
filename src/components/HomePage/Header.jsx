import headerImage from "../../assets/Rectangle 1.png";
import securityIcon from "../../assets/Security.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
        <h1>EcoAirWatch.</h1>
        <div className="header-content">
          <div className="header-content-left">
            <h1 className="header-text"><span>Breathe Easy with</span> Global Air Quality Insights.</h1>
            <Link to="/dashboard" className="cta">Explore Air Quality Now <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">

              <path d="M24.25 15H5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M19.25 8.75L24.6161 14.1161C25.0328 14.5328 25.2411 14.7411 25.2411 15C25.2411 15.2589 25.0328 15.4672 24.6161 15.8839L19.25 21.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg></Link>
          </div>

          <img src={headerImage}></img>
          <img className="security-icon" src={securityIcon}></img>
        </div>
      </header>
  )
}

export default Header
