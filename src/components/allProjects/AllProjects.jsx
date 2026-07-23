import "./AllProjects.scss";
import data from "../../assets/data/projects.js";
import Project from "../project/Project.jsx";
import { useState } from "react";

const AllProjects = () => {
  const [activeCat, setActiveCat] = useState("All");
  const catList = [
    "All",
    ...new Set(data.map((i) => i.category.toLocaleLowerCase())),
  ];
  const newData = data.filter((i) =>
    activeCat === "All" ? true : i.category.toLocaleLowerCase() === activeCat,
  );

  return (
    <div className="allProjects">
      <div className="cont">
        <div className="text">
          <span className="eyebrow">All Works</span>
          <h1 className="title">SAS Projects</h1>
          <h1 className="headline">
            A COLLECTION OF ARCHITECTURE DEFINED BY VISION, DETAIL, AND PURPOSE
          </h1>
          <p>
            Our works explore the relationship between form, function, and
            atmosphere. Every project is shaped by its unique context,
            transforming ideas into carefully considered spaces that balance
            beauty, performance, and lasting value.
          </p>
        </div>
        <div className="filtering">
          <h2>Filter</h2>
          <ul>
            {catList.map((cat) => {
              return (
                <li
                  key={cat}
                  onClick={() => setActiveCat(cat)}
                  className={`${activeCat === cat ? "active" : ""}`}
                >
                  {cat}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="projects-cont">
        {newData.map((proj) => {
          return <Project project={proj} key={proj.id} />;
        })}
      </div>
    </div>
  );
};

export default AllProjects;
