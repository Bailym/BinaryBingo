import "./landingPage.css";
import {Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing-div">
        <h1>BINARY BINGO.</h1>
        <button className="landing-button landing-button-red">
            <a href={process.env.PUBLIC_URL + "/Draw"}>Teacher</a>
        </button>
        <button className="landing-button landing-button-blue">
            <a href={process.env.PUBLIC_URL + "/Card"}>Student</a>
        </button>
      
    </div>
  );
}

export default LandingPage;