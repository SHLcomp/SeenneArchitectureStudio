import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer noise">

      <div className="top">

        <div className="brand">
          <span className="eyebrow">Seenne Architecture Studio</span>

          <h2 className="title">SAS</h2>

          <p>
            Creating timeless architecture where elegance,
            functionality, and human experience exist in perfect harmony.
          </p>
        </div>

        <div className="links">

          <div>
            <h4>Navigation</h4>

            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Projects</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>

          <div>
            <h4>Studio</h4>

            <p>Amman, Jordan</p>
            <p>+962 7X XXX XXXX</p>
            <p>studio@sasarchitecture.com</p>
          </div>

          <div>
            <h4>Follow</h4>

            <a href="#">Instagram</a>
            <a href="#">Pinterest</a>
            <a href="#">LinkedIn</a>
          </div>

        </div>

      </div>

      <div className="bottom">

        <p>© 2026 Seenne Architecture Studio. All Rights Reserved.</p>

        <p>Designed Around Human Experience.</p>

      </div>

    </footer>
  );
};

export default Footer;