import { Link } from "react-router-dom";
import "./Project.scss";

const Project = ({project}) => {
  return (
    <div className="project">
            <Link className="a" to={`/works/${project.slug}`}><div className="img">
             <img src={project.thumbnail} alt={project.title} />
            </div></Link> 

            <div className="text">
              <div className="info">
                <Link className="a" to={`/works/${project.id}`}><h4>{project.title}</h4></Link>
                <h5>{project.year}</h5>
              </div>

              <div className="desc">
                <p>{project.shortDescription}</p>
              </div>
            </div>
          </div>
  )
}

export default Project