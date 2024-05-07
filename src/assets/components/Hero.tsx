import "../styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div className="greeting_container">
        <ul className="greeting">
          <li className="greet1">
            He<span>ll</span>o
          </li>
          <li className="greet2">
            न<span>म</span>स्ते
          </li>
        </ul>
      </div>

      <div className="company_name">
        <p>Welcome to</p>
        <p>FrameSquare</p>
      </div>
    </div>
  );
};

export default Hero;
