import { Link } from "react-router-dom";
import "./Projects.scss";
import projects from "../../assets/data/projects.js"; 
import Project from "../project/Project.jsx";

const Projects = () => {
  const featuredProjects = projects.filter(project => project.priority);

  return (
    <div className="projects">
      <span className="eyebrow">Selected Works</span>

      <div className="div-tl">
        <h1 className="title">Featured Projects</h1>

        <Link className="a" to="/works">
          <p className="cta2">View All</p>
        </Link>
      </div>
      
      <div className="projects-cont">
        {featuredProjects.map((project) => (
          <Project project={project} key={project.id}/>
        ))}
      </div>
    </div>
  );
};

export default Projects;