import Home from './Home.jsx';
import NewProject from './NewProject.jsx';

export default function Main({ projectState, onNewProjectButtonClick, onCloseNewProject }) {
    return (
        <>
            {projectState === "home" &&
                <Home
                    onNewProjectButtonClick={onNewProjectButtonClick}
                />
            }
            {projectState === "newProject" &&
                <NewProject
                    onCloseNewProject={onCloseNewProject}
                />
            }
        </>
    );
}