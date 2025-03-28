import NewProjectButton from './buttons/NewProjectButton.jsx';
import logo from '../assets/no-projects.png';

export default function MainComponent() {
    return (
        <div className="flex-auto justify-items-center mt-14">
            <img src={logo} alt="logo" className="size-20" />
            <h2 className="my-8 font-bold">No Project Selected</h2>
            <p>Select a project or start with a new one</p>
            <NewProjectButton newProjectButtonLabel="Create new project" />
        </div>
    );
}