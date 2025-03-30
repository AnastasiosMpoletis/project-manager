import { useState } from "react";

import SideBar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";

// const availableStates = ["home", "newProject", "editProject"];

function App() {
  const [projectState, setProjectState] = useState("home");

  function handleProjectState(newState) {
    setProjectState(newState);
  }

  return (
    <>
      <div className="flex flex-row">
        <SideBar
          onNewProjectButtonClick={() => handleProjectState("newProject")}
        />
        <div id="main" className="flex-auto justify-items-center mt-14">
          <Main
            projectState={projectState}
            onNewProjectButtonClick={() => handleProjectState("newProject")}
            onCloseNewProject={() => handleProjectState("home")}
          />
        </div>
      </div>
    </>
  );
}

export default App;
