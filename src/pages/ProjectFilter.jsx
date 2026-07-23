import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import data from "../assets/data/projects.js"
import ProjectDisplay from "../components/projectDisplay/ProjectDisplay.jsx";

const ProjectFilter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);
  const { projId } = useParams();
  const project = data.find((e) => e.slug === projId);
  if (!project) return <h1 style={{ padding: "10vh" }}>Project Not Found</h1>;
  return (
    <div>
      <ProjectDisplay proj={project} />
    </div>
  );
};

export default ProjectFilter;
