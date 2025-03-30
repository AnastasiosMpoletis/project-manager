import NewProjectButton from "./buttons/NewProjectButton.jsx";

export default function SideBar({ onNewProjectButtonClick }) {
    return (
        <div className="mt-7 w-60 flex-none bg-stone-800 text-slate-100 shadow-lg rounded-tr-lg">
            <h1 className="font-bold mt-9 ml-9 uppercase">Your projects</h1>
            <NewProjectButton
                newProjectButtonLabel="+ Add Project"
                onNewProjectButtonClick={onNewProjectButtonClick}
            />
        </div>
    );
}