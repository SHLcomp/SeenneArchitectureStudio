import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import "./ProjectDisplay.scss";
import { useEffect } from "react";
import Footer from "../footer/Footer";

const ProjectDisplay = ({proj}) => {

  const {pathname} = useLocation();
   useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant"
    });
  }, [pathname]);

  return (
    <>
      <Navbar />

      <div className="projectDisplay">

        {/* HERO */}
        <div className="top">
          <div className="txt">
            <h1>{proj.title}</h1>
            <p>{proj.description}</p>


          </div>

          <div className="img-cont">
            <img src={proj.image} alt={proj.title} />
          </div>
        </div>

      

      </div>
      <Footer />
    </>
  );
};

export default ProjectDisplay;
