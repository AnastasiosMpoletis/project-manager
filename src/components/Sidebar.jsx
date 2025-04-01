import NewProjectButton from "./buttons/NewProjectButton.jsx";
import { STATES } from "../utils/AppStates.jsx";
import { useState } from "react";

export default function SideBar({ onProjectStateChange, projects, onSelectProject }) {

    /**
     * We need it to deselect the selected project when we click the SideBar NewProjectButton, delete a project etc.
     */
    const [selectedProjectId, setSelectedProjectId] = useState();

    function onProjectSelected(selectedProject) {
        onProjectStateChange(STATES.EDIT_TASKS);
        onSelectProject(selectedProject);
        setSelectedProjectId(selectedProject.projectId);
    }

    function onNewProject() {
        onProjectStateChange(STATES.NEW_PROJECT);
        setSelectedProjectId(undefined); // reset selectedProjectId
    }

    return (
        <div id="side-bar" className="px-4 mt-7 w-80 flex-none bg-stone-800 text-slate-100 shadow-lg rounded-tr-lg">
            <h1 className="font-bold mt-7 uppercase">Your projects</h1>

            <NewProjectButton
                newProjectButtonLabel="+ Add Project"
                onNewProject={onNewProject}
            />

            <div id="sidebar-projects" className="my-2 h-[78vh] overflow-y-auto">
                {/* Display projects */}
                <ul className="list-none">
                    {projects.map((project) => {
                        // add a background to the selected project
                        const projectListStyle = `overflow-hidden text-ellipsis whitespace-nowrap mb-3 mr-2 p-2 rounded-md hover:bg-stone-900 cursor-pointer 
                            ${selectedProjectId === project.projectId && 'bg-stone-900'}`;

                        return (
                            <li
                                key={project.projectId}
                                className={projectListStyle}
                                title={project.projectTitle}
                                onClick={() => onProjectSelected(project)}
                            >
                                {project.projectTitle}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}