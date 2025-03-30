import { useState } from "react";

import SideBar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import { STATES } from "./utils/AppStates.jsx";

function App() {
  const [projectState, setProjectState] = useState(STATES.HOME);
  const [projects, setProjects] = useState([]);

  function changeProjectState(newState) {
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

    changeProjectState(STATES.HOME);
  }

  return (
    <>
      <div className="flex h-dvh flex-nowrap">
        <SideBar
          onNewProject={() => changeProjectState(STATES.NEW_PROJECT)}
          projects={projects}
        />
        <div id="main" className="flex-auto m-auto">
          <Main
            projectState={projectState}
            onNewProject={() => changeProjectState(STATES.NEW_PROJECT)}
            onCloseNewProject={() => changeProjectState(STATES.HOME)}
            onAddNewProject={handleAddNewProject}
          />
        </div>
      </div>
    </>
  );
}

export default App;
