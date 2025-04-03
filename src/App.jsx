import { useState } from "react";

import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSideBar from "./components/ProjectsSideBar.jsx";
import SelectedProject from "./components/SelectedProject.jsx";

function App() {
  const [projectsState, setProjectsState] = useState({
    /**
     * undefined -> we do not add a new project or haven't selected a new project.
     * null -> we add a new project
     * truthy (has a value) -> selected project id
     */
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });

  function handleAddTask(text) {
    setProjectsState(previousState => {
      const newTask = {
        text: text,
        projectId: previousState.selectedProjectId,
        id: Math.random()
      }

      return {
        ...previousState,
        tasks: [newTask, ...previousState.tasks]
      };
    });
  }

  function handleDeleteTask() {

  }

  function handleSelectProject(id) {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: id,
      }
    });
  }

  function handleCancelAddProject() {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: undefined,
      }
    });
  }

  function handleStartAddProject() {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: null,
      }
    });
  }

  function handleAddProject(projectData) {
    setProjectsState(previousState => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...previousState,
        selectedProjectId: undefined, // navigate to no project screen after saving a new project
        projects: [...previousState.projects, newProject]
      };
    });
  }

  function handleDeleteProject() {
    setProjectsState(previousState => {
      return {
        ...previousState,
        selectedProjectId: undefined,
        projects: previousState.projects.filter((project) => project.id !== previousState.selectedProjectId)
      }
    });
  }

  const selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId);

  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteProject}
      tasks={projectsState.tasks}
    />);

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
