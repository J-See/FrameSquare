import { IoMdHome } from "react-icons/io";
import "../styles/NoPage.css";
import { NavLink } from "react-router-dom";

const NoPage = () => {
  const no_page = "/images/404-nopage.svg";
  return (
    <>
      <div className="no_page">
        <img src={no_page} alt="404 image" />
        <p className="gotohome">
          <NavLink to="/FrameSquare/">
            <IoMdHome />
            Back to Home
          </NavLink>
        </p>
      </div>
    </>
  );
};

export default NoPage;
