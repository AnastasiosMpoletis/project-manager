import NewProjectButton from "./buttons/NewProjectButton.jsx";
import { STATES } from "../utils/AppStates.jsx";
import { useState } from "react";

export default function SideBar({ onProjectStateChange, projects, onSelectProject }) {

    /**
     * We need it to deselect the selected project when we click the SideBar NewProjectButton.
     */
    const [selectedProjectIndex, setSelectedProjectIndex] = useState();

    function onProjectSelected(index, project) {
        onProjectStateChange(STATES.EDIT_TASKS);
        onSelectProject(project);
        setSelectedProjectIndex(index);
    }

    function onNewProject() {
        onProjectStateChange(STATES.NEW_PROJECT);
        setSelectedProjectIndex(undefined); // reset selectedProjectIndex
    }

    return (
        <div id="side-bar" className="px-4 mt-7 w-80 flex-none bg-stone-800 text-slate-100 shadow-lg rounded-tr-lg">
            <h1 className="font-bold mt-7 uppercase">Your projects</h1>

            <NewProjectButton
                newProjectButtonLabel="+ Add Project"
                onNewProject={onNewProject}
            />

            {/* Display projects */}
            <ul className="mt-7 list-none">
                {projects.map((project, index) => {
                    // add a background to the selected project
                    const projectListStyle = `
                    overflow-hidden text-ellipsis whitespace-nowrap mt-3 p-2 rounded-md hover:bg-stone-900 cursor-pointer 
                    ${selectedProjectIndex === index && 'bg-stone-900'}
                    `;

                    return (
                        <li
                            key={index}
                            className={projectListStyle}
                            title={project.projectTitle}
                            onClick={() => onProjectSelected(index, project)}
                        >
                            {project.projectTitle}
                        </li>
                    );
                })}
            </ul>
        </div >
    );
}