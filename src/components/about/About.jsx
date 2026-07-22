import "./About.scss";

const About = () => {
  return (
    <div className="about">
      <div className="one">
        <span className="eyebrow">About Studio</span>
        <h1 className="headline">
          The Spaces That Define Tomorrow Begin with the Design Decisions Made
          Today
        </h1>
        <h3 className="cta1">Get A Quote</h3>
      </div>
      <div className="two">
        <div className="text">
          <p>
            Creating residences, hotels, and landmark destinations where every
            proportion, material, and detail is carefully considered to stand
            the test of time.
          </p>
          <div className="infos">
            <div className="info">9+ <span>Years</span></div>
            <div className="info">70 <span>Projects</span></div>
            <div className="info">5+ <span>Awards</span></div>
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
