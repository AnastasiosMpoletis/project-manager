import NewProjectButton from "./buttons/NewProjectButton.jsx";

export default function SideBar({ onNewProjectButtonClick }) {
    return (
        <aside className="mt-7 w-60 flex flex-none bg-stone-800 text-slate-100 shadow-lg rounded-tr-lg">
            <nav>
                <p className="font-bold m-9 uppercase">Your projects</p>
                <NewProjectButton
                    newProjectButtonLabel="+ Add Project"
                    onNewProjectButtonClick={onNewProjectButtonClick}
                />
            </nav>
        </aside>
    );
}