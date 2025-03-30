import NewProjectButton from "./buttons/NewProjectButton.jsx";
import logo from '../assets/no-projects.png';

export default function Home({ onNewProject }) {
    return (
        <div id="home" className="justify-items-center p-10">
            <img src={logo} alt="logo" className="size-20" />
            <h2 className="my-8 font-bold">No Project Selected</h2>
            <p>Select a project or start with a new one</p>
            <NewProjectButton
                newProjectButtonLabel="Create new project"
                onNewProject={onNewProject}
            />
        </div>
    );
}