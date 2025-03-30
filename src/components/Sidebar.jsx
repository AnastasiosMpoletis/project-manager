import NewProjectButton from "./buttons/NewProjectButton.jsx";

export default function SideBar({ onNewProject, projects }) {
    return (
        <div className="px-9 mt-7 w-60 flex-none bg-stone-800 text-slate-100 shadow-lg rounded-tr-lg">
            <h1 className="font-bold mt-7 uppercase">Your projects</h1>
            <NewProjectButton
                newProjectButtonLabel="+ Add Project"
                onNewProject={onNewProject}
            />

            <ul className="mt-7 list-none">
                {projects.map((project, index) => {
                    return (
                        <li key={index} className="mt-3">{project.projectTitle}</li>
                    );
                })}
            </ul>
        </div>
    );
}