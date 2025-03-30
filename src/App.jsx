import { useState } from "react";

import SideBar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import { STATES } from "./utils/AppStates.jsx";

function App() {
  const [projectState, setProjectState] = useState(STATES.HOME);

  /**
   * @deprecated
   * Use it for testing Tasks.
   */
  const dummyProjects = [{
    projectTitle: "Learn React with Max",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectDueDate: "2025-03-11"
  }, {
    projectTitle: "Learn JavaScript with Max and Css with me",
    projectDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pa.",
    projectDueDate: "2025-03-15"
  }, 
  {
    projectTitle: "Learn TypeScript with Max and Java 21 with me",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectDueDate: "2025-03-02"
  }];

  // const [projects, setProjects] = useState([]);
  const [projects, setProjects] = useState(dummyProjects);
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
      <div id="app" className="flex h-dvh flex-nowrap">
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
