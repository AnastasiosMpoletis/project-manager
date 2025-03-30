import Home from './Home.jsx';
import NewProject from './NewProject.jsx';

export default function Main() {
    let showNumber = 1;
    return (
        <>
            {showNumber === 1 && <Home />}
            {showNumber === 2 && <NewProject />}
        </>
    );
}