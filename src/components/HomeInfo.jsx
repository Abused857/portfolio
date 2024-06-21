import { Link } from "react-router-dom";
import {arrow} from '../assets/icons/'


const InfoBox = ({ text, link, btnText }) => (

  <div className="info-box">


    <p className="font-medium sm:text-xl text-center">{text}</p>


    <Link to={link} className="neo-brutalism-white neo-btn">
    
    <span className="magenta-gradient_text font-bold text-xl"
    >{btnText}</span>
    <img src={arrow} className="w-4 h-4 object-contain "/>
    </Link>
  </div>
);
const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-magenta py-4 px-8 text-white mx-5">
      Hello there!, my name is <span className="font-semibold">Germán</span>✌️
      <br />
      <br />
      Jr. backend oriented web developer from Spain.
    </h1>
  ),
  2: (
    <InfoBox
      text="programming enthusiast eager to learn"
      link="/about"
      btnText="Learn more"
    />
  ),
  3:  (
    <InfoBox
      text="I am continuously improving and expanding my skills through ongoing personal projects."
      link="/projects"
      btnText="Check my Git"
    />
  ),
  4:  (
    <InfoBox
      text="I am not currently seeking new opportunities, but I welcome any inquiries or questions you may have."
      link="/contact"
      btnText="Drop me a message!"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
