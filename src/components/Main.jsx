import Home from './Home.jsx';
import NewProject from './NewProject.jsx';
import Tasks from './Tasks.jsx';
import { STATES } from '../utils/AppStates.jsx';

export default function Main({ appState, selectedProject,
    onAppStateChange, onAddNewProject, onDeleteSelectedProject, onAddNewTaskToSelectedProject, onDeleteTask }) {
    return (
        <>
            {appState === STATES.HOME &&
                <Home
                    onAddNewProject={onAppStateChange}
                />
            }
            {appState === STATES.NEW_PROJECT &&
                <NewProject
                    onCloseNewProject={onAppStateChange}
                    onAddNewProject={onAddNewProject}
                />
            }
            {appState === STATES.EDIT_TASKS &&
                <Tasks
                    selectedProject={selectedProject}
                    onDeleteSelectedProject={onDeleteSelectedProject}
                    onAddNewTaskToSelectedProject={onAddNewTaskToSelectedProject}
                    onDeleteTask={onDeleteTask}
                />
            }
        </>
    );
}