import Home from './Home.jsx';
import NewProject from './NewProject.jsx';
import { STATES } from '../AppStates.jsx';

export default function Main({ projectState, onNewProject, onCloseNewProject, onAddNewProject }) {
    return (
        <>
            {projectState === STATES.HOME &&
                <Home
                    onNewProject={onNewProject}
                />
            }
            {projectState === STATES.NEW_PROJECT &&
                <NewProject
                    onCloseNewProject={onCloseNewProject}
                    onAddNewProject={onAddNewProject}
                />
            }
        </>
    );
}