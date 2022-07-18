import "./landingPage.css";
import {Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-div">
        <h1>BINARY BINGO.</h1>
        <button className="landing-button landing-button-red">
            <Link to="/Draw">Teacher</Link>
        </button>
        <button className="landing-button landing-button-blue">
            <Link to="/Card">Student</Link>
        </button>
      
    </div>
  );
}

export default LandingPage;