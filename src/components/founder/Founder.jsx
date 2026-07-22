import "./Founder.scss";

const Founder = () => {
  return (
    <div className="founder">
      <div className="img">
        <img src="https://images.pexels.com/photos/26150470/pexels-photo-26150470.jpeg" alt="" />
      </div>
      <div className="text">
        <div className="info">
          <span className="eyebrow">Founder</span>
          <h1 className="title">Seenne .B Herz</h1>
          <p>Founder & Principal Architect</p>
        </div>
        <h2>“Every remarkable space begins with a simple idea”</h2>
        <p>
          Every project starts with understanding the people who will inhabit
          it. We believe thoughtful design isn't about imposing a signature
          style—it's about creating spaces that feel personal, timeless, and
          deeply connected to their surroundings.
        </p>
        <h3 className="cta1">
            Speak with the team
        </h3>
      </div>
    </div>
  );
};

export default Founder;
