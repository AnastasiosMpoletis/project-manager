import { useState } from "react";

import SideBar from "./components/Sidebar.jsx";
import Main from "./components/Main.jsx";
import { STATES } from "./utils/AppStates.jsx";

function App() {
  const [appState, setAppState] = useState(STATES.HOME);
  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState();

  /**
   * States defined in {@link STATES}.
   * 
   * @param {*} newAppState 
   */
  function handleAppStateChange(newAppState) {
    setAppState(newAppState);
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
        projectId: generateId(),
        projectTitle: title,
        projectDescription: description,
        projectDueDate: dueDate,
        projectTasks: []
      }

      updatedProjects.push(newProject);

      return updatedProjects;
    });

    handleAppStateChange(STATES.HOME);
  }

  /**
   * Could also use React useId hook.
   * 
   * @returns a random id for any new project or task.
   */
  function generateId() {
    return Math.random().toString(36).substr(2, 9);
  }

  /**
   * Deletes selected project.
   * 
   * @returns 
   */
  function handleDeleteSelectedProject() {
    return handleDeleteProjectById(selectedProject);
  }

  /**
   * Deletes a project.
   * 
   * @param {*} projectToDelete 
   */
  function handleDeleteProjectById(projectToDelete) {
    setProjects(previousProjects => previousProjects.filter(project => project.projectId !== projectToDelete.projectId));
    handleAppStateChange(STATES.HOME);
  }

  function handleSelectProject(project) {
    setSelectedProject(project);
  }

  function handleAddNewTaskToSelectedProject(taskTitle) {
    return handleAddNewTaskToProject(selectedProject, taskTitle)
  }

  /**
   * Adds a task to a project.
   * 
   * @param {*} project project to add the task
   * @param {*} taskTitle task to add
   */
  function handleAddNewTaskToProject(project, taskTitle) {
    const newTask = {
      taskId: generateId(),
      taskTitle: taskTitle
    }
    const updatedProjects = [...projects];
    updatedProjects.forEach(p => {
      if (p.projectId === project.projectId) {
        p.projectTasks = [newTask, ...p.projectTasks]; // add new task on top
      }
    });
    setProjects(updatedProjects);
  }

  function handleDeleteTaskFromSelectedProject(taskId) {
    return handleDeleteTaskFromProject(selectedProject, taskId);
  }

  /**
   * Deletes a task from a project.
   * 
   * @param {*} project project to delete the task
   * @param {*} taskId task to delete
   */
  function handleDeleteTaskFromProject(project, taskId) {
    const updatedProjects = [...projects];
    let updatedTasks = [];
    updatedProjects.forEach(p => {
      if (p.projectId === project.projectId) {
        updatedTasks = [...p.projectTasks];
        updatedTasks = updatedTasks.filter(t => t.taskId != taskId);
      }
      p.projectTasks = updatedTasks;
    })
    setProjects(updatedProjects);
  }

  return (
    <>
      <div id="app" className="flex h-dvh flex-nowrap">
        <SideBar
          onAppStateChange={handleAppStateChange}
          projects={projects}
          onSelectProject={handleSelectProject}
        />
        <Main
          appState={appState}
          selectedProject={selectedProject}
          onAppStateChange={handleAppStateChange}
          onAddNewProject={handleAddNewProject}
          onDeleteSelectedProject={handleDeleteSelectedProject}
          onAddNewTaskToSelectedProject={handleAddNewTaskToSelectedProject}
          onDeleteTask={handleDeleteTaskFromSelectedProject}
        />
      </div>
    </>
  );
}

export default App;
