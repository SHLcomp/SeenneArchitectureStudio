import { useLocation } from "react-router-dom";
import AllProjects from "../components/allProjects/AllProjects";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";
import { useEffect } from "react";

const Works = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <div>
      <Navbar />
      <AllProjects />
      <Footer />
    </div>
  );
};

export default Works;
