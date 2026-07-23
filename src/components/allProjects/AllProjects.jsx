import "./AllProjects.scss"
import data from "../../assets/data/projects.js"
import Project from "../project/project.jsx"

const AllProjects = () => {
    
  return (
    <div className="allProjects">
        <div className="text">
            <span className="eyebrow">All Works</span>
            <h1 className="title">SAS Projects</h1>
        </div>
        <div className="projects-cont">
            {data.map((proj)=>{
                return <Project project={proj} key={proj.id}/>
            })}
        </div>
    </div>
  )
}

export default AllProjects