import { Link } from "react-router-dom";
import "./Project.scss";

const Project = ({project}) => {
  return (
    <div className="project">
            <Link className="a" to={`/works/${project.id}`}><div className="img">
             <img src={project.image} alt={project.title} />
            </div></Link> 

            <div className="text">
              <div className="info">
                <Link className="a" to={`/works/${project.id}`}><h4>{project.title}</h4></Link>
                <h5>{project.year}</h5>
              </div>

              <div className="desc">
                <p>{project.description}</p>
              </div>
            </div>
          </div>
  )
}

export default Project