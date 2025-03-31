import Home from './Home.jsx';
import NewProject from './NewProject.jsx';
import Tasks from './Tasks.jsx';
import { STATES } from '../utils/AppStates.jsx';

export default function Main({ projectState, selectedProject, onProjectStateChange, onAddNewProject, onDeleteSelectedProject }) {
    return (
        <>
            {projectState === STATES.HOME &&
                <Home
                    onNewProject={onProjectStateChange}
                />
            }
            {projectState === STATES.NEW_PROJECT &&
                <NewProject
                    onCloseNewProject={onProjectStateChange}
                    onAddNewProject={onAddNewProject}
                />
            }
            {projectState === STATES.EDIT_TASKS &&
                <Tasks
                    selectedProject={selectedProject}
                    onDeleteSelectedProject={onDeleteSelectedProject}
                />
            }
        </>
    );
}