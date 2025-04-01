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
    projectId: generateId(),
    projectTitle: "Learn React with Max",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectDueDate: "2025-03-11",
    projectTasks: [
      { taskId: generateId(), taskTitle: "Task Title that can be used." },
      { taskId: generateId(), taskTitle: "Task Title that can be used2." },
      { taskId: generateId(), taskTitle: "Task Title that can be used3." }
    ]
  }, {
    projectId: generateId(),
    projectTitle: "Learn JavaScript with Max and Css with me",
    projectDescription: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    // totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pa.",
    projectDueDate: "2025-03-15", projectTasks: []
  },
  {
    projectId: generateId(),
    projectTitle: "Learn TypeScript with Max and Java 21 with me",
    projectDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    projectDueDate: "2025-03-02", projectTasks: []
  }];

  // const [projects, setProjects] = useState([]);
  const [projects, setProjects] = useState(dummyProjects);
  const [selectedProject, setSelectedProject] = useState();

  /**
   * States defined in {@link STATES}.
   * 
   * @param {*} newState 
   */
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
        projectId: generateId(),
        projectTitle: title,
        projectDescription: description,
        projectDueDate: dueDate,
        projectTasks: []
      }

      updatedProjects.push(newProject);

      return updatedProjects;
    });

    handleProjectStateChange(STATES.HOME);
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
    handleProjectStateChange(STATES.HOME);
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
    //TODO ANBOL add a global message on save/delete
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
          onProjectStateChange={handleProjectStateChange}
          projects={projects}
          onSelectProject={handleSelectProject}
        />
        <Main
          projectState={projectState}
          selectedProject={selectedProject}
          onProjectStateChange={handleProjectStateChange}
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
