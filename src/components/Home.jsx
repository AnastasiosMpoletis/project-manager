import NewProjectButton from "./buttons/NewProjectButton.jsx";
import logo from '../assets/no-projects.png';
import { STATES } from "../utils/AppStates.jsx";

export default function Home({ onAddNewProject }) {
    return (
        <div id="home" className="flex-auto justify-items-center m-auto">
            <img src={logo} alt="logo" className="size-36" />
            <h1 className="my-8 font-bold text-3xl text-stone-700">No Project Selected</h1>
            <h2>Select a project or start with a new one</h2>
            <NewProjectButton
                newProjectButtonLabel="Create new project"
                onAddNewProject={() => onAddNewProject(STATES.NEW_PROJECT)}
            />
        </div>
    );
}