import { useLocation } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import "./ProjectDisplay.scss";
import { useEffect } from "react";

const ProjectDisplay = ({ proj }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return (
    <>
      <Navbar />

      <main className="projectDisplay">
        {/* HERO */}
        <section className="hero">
          <div className="hero-img">
            <img src={proj.heroImage} alt={proj.title} />
          </div>

          <div className="hero-content">
            <p className="category">{proj.category}</p>

            <h1 className="title">{proj.title}</h1>

            <p className="description">{proj.shortDescription}</p>
          </div>
        </section>

        {/* PROJECT INFO */}

        <section className="info section">
          <div>
            <span>Client</span>
            <p>{proj.client}</p>
          </div>

          <div>
            <span>Location</span>
            <p>{proj.location}</p>
          </div>

          <div>
            <span>Year</span>
            <p>{proj.year}</p>
          </div>

          <div>
            <span>Area</span>
            <p>{proj.area}</p>
          </div>

          <div>
            <span>Status</span>
            <p>{proj.status}</p>
          </div>
        </section>

        {/* OVERVIEW */}

        <section className="section">
          <h2>Overview</h2>

          <p>{proj.overview}</p>
        </section>

        {/* STORY */}

        <section className="section">
          <h2>Project Story</h2>

          <p>{proj.story}</p>
        </section>

        {/* SERVICES */}

        <section className="section">
          <h2>Services Provided</h2>

          <div className="tags">
            {proj.services.map((item, index) => (
              <span className="services-span" key={index}>{item}</span>
            ))}
          </div>
        </section>

        {/* CHALLENGES */}

        <section className="two-column section">
          <div>
            <h2>Challenges</h2>

            <ul>
              {proj.challenges.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2>Solution</h2>

            <p>{proj.solution}</p>
          </div>
        </section>

        {/* MATERIALS */}

        <section className="section">
          <h2>Materials</h2>

          <div className="tags">
            {proj.materials.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </section>

        {/* SUSTAINABILITY */}

        <section className="section">
          <h2>Sustainability</h2>

          <div className="tags">
            {proj.sustainability.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </section>

        {/* AWARDS */}

        {proj.awards.length > 0 && (
          <section className="section">
            <h2>Awards</h2>

            <ul>
              {proj.awards.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </section>
        )}

        {/* GALLERY */}

        <section className="gallery section">
          <h2>Gallery</h2>

          <div className="gallery-grid">
            {proj.gallery.map((img, index) => (
              <img key={index} src={img} alt={`${proj.title}-${index}`} />
            ))}
          </div>
        </section>

        {/* FLOOR PLANS

        <section className="gallery section">
          <h2>Floor Plans</h2>

          <div className="gallery-grid">
            {proj.floorPlans.map((img, index) => (
              <img key={index} src={img} alt="floor plan" />
            ))}
          </div>
        </section> */}

      </main>

      <Footer />
    </>
  );
};

export default ProjectDisplay;
