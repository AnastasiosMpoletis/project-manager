import { useState } from "react";

import SideBar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import { STATES } from "./utils/AppStates.jsx";

function App() {
  const [projectState, setProjectState] = useState(STATES.HOME);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  function handleProjectStateChange(newState) {
    setProjectState(newState);
  }

  /**
   * Adds a new Project.
   * 
   * @param {*} title 
   * @param {*} description 
   * @param {*} dueDate 
   */
  function handleAddNewProject(title, description, dueDate) {
    setProjects((previousProjects) => {
      const updatedProjects = [...previousProjects];
      const newProject = {
        projectTitle: title,
        projectDescription: description,
        projectDueDate: dueDate
      }

      updatedProjects.push(newProject);
      console.log("UpdatedProjects: " + JSON.stringify(updatedProjects)); // TODO ANBOL remove this later

      return updatedProjects;
    });

    handleProjectStateChange(STATES.HOME);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  return (
    <>
      <div className="flex h-dvh flex-nowrap">
        <SideBar
          onProjectStateChange={handleProjectStateChange}
          projects={projects}
          onSelectProject={handleSelectProject}
        />
        <Main
          projectState={projectState}
          project={selectedProject}
          onProjectStateChange={handleProjectStateChange}
          onAddNewProject={handleAddNewProject}
        />
      </div>
    </>
  );
}

export default App;
